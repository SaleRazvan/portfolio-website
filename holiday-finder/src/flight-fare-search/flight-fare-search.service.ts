import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  GetFlightFareDto,
  GetFlightFareResponseDto,
} from './dtos/get-flight-fare-dto';
import { HttpService } from '@nestjs/axios';

type FlightFareSearchApiResponse = {
  results: Array<{
    id: string;
    flight_name: string;
    cabinType: string;
    stops: string;
    totals: {
      total: number;
    };
  }>;
};

@Injectable()
export class FlightFareSearchService {
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async getFlightFare(
    query: GetFlightFareDto,
  ): Promise<GetFlightFareResponseDto> {
    const { from, to, date } = query;

    try {
      const flightFareSearchKey = this.configService.get<string>(
        'FLIGHT_FARE_SEARCH_KEY',
      );

      const { data } =
        await this.httpService.axiosRef.get<FlightFareSearchApiResponse>(
          'https://flight-fare-search.p.rapidapi.com/v2/flights',
          {
            params: { from, to, date, adult: 1, currency: 'EUR' },
            headers: {
              'x-rapidapi-key': flightFareSearchKey,
              'x-rapidapi-host': 'flight-fare-search.p.rapidapi.com',
            },
          },
        );

      let filteredFlights;

      // Filter out indirect flights
      const noStopFlights = data.results.filter((flight) =>
        flight.stops.includes('Direct'),
      );

      if (noStopFlights.length) {
        filteredFlights = noStopFlights;
      } else {
        const oneStopFlights = data.results.filter((flight) =>
          flight.stops.includes('1'),
        );
        filteredFlights = oneStopFlights;
      }

      // Keep only the cheapest route available
      const cheapestOneStopFlight = filteredFlights.reduce(
        (cheapest, current) =>
          current.totals.total < cheapest.totals.total ? current : cheapest,
      );

      return {
        id: cheapestOneStopFlight.id,
        flightName: cheapestOneStopFlight.flight_name,
        stops: cheapestOneStopFlight.stops,
        cabinType: cheapestOneStopFlight.cabinType,
        price: cheapestOneStopFlight.totals.total,
      };
    } catch (error) {
      if (error.response?.status) {
        throw new HttpException(
          error.response.data?.message || error.message,
          error.response.status,
        );
      }

      throw new HttpException(
        'Failed to fetch flight information',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
