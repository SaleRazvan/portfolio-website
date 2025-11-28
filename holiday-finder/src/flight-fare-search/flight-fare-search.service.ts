import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GetFlightFareDto } from './dtos/get-flight-fare-dto';

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
  constructor(private configService: ConfigService) {}

  async getFlightFare(query: GetFlightFareDto) {
    const { from, to, date } = query;

    try {
      const flightFareSearchKey = this.configService.get<string>(
        'FLIGHT_FARE_SEARCH_KEY',
      );

      const response = await fetch(
        `https://flight-fare-search.p.rapidapi.com/v2/flights/?from=${from}&to=${to}&date=${date}&adult=1&currency=EUR`,
        {
          headers: {
            'x-rapidapi-key': flightFareSearchKey,
            'x-rapidapi-host': 'flight-fare-search.p.rapidapi.com',
          },
        },
      );

      const data: FlightFareSearchApiResponse = await response.json();

      // Filter out 2 stops
      const oneStopFlights = data.results.filter(
        (flight) => !flight.stops.includes('2'),
      );

      // Keep only the cheapest route available
      const cheapestOneStopFlight = oneStopFlights.reduce(
        (cheapest, current) =>
          current.totals.total < cheapest.totals.total ? current : cheapest,
      );

      return {
        id: cheapestOneStopFlight.id,
        flightName: cheapestOneStopFlight.flight_name,
        cabinType: cheapestOneStopFlight.cabinType,
        price: cheapestOneStopFlight.totals.total,
      };
    } catch (parseError) {
      throw new InternalServerErrorException();
    }
  }
}
