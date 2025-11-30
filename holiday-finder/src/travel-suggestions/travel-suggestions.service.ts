import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Request } from 'express';
import { DestinationsService } from 'src/destinations/destinations.service';
import { FlightFareSearchService } from 'src/flight-fare-search/flight-fare-search.service';
import { GeolocationService } from 'src/geo-location/geo-location.service';
import { UnsplashService } from 'src/unsplash/unsplash.service';
import { GetTravelSuggestionsResponseDto } from './dtos/get-travel-suggestions-dto';
import {
  GetDestinationsDto,
  GetDestinationsResponseDto,
} from 'src/destinations/dtos/get-destinations-dto';
import { GetFlightFareResponseDto } from 'src/flight-fare-search/dtos/get-flight-fare-dto';
import { addDays } from 'src/common/helpers/date.helper';
import generateBookingUrl from 'src/common/helpers/generate-booking-url.helper';

@Injectable()
export class TravelSuggestionsService {
  constructor(
    private destinationsService: DestinationsService,
    private unsplashService: UnsplashService,
    private flightFareSearchService: FlightFareSearchService,
    private geolocationService: GeolocationService,
  ) {}

  async getTravelSuggestions(
    filters: GetDestinationsDto,
    request: Request,
  ): Promise<Array<GetTravelSuggestionsResponseDto>> {
    const destinations: Array<GetDestinationsResponseDto> =
      await this.destinationsService.generateDestinations(filters);

    const userLocation =
      await this.geolocationService.getLocationFromRequest(request);

    const userAirport = await this.geolocationService.getUserAirportByLocation(
      userLocation.city,
      userLocation.country,
    );

    const checkoutDate = addDays(filters.checkinDate, filters.days);

    try {
      const enrichedDestinations = await Promise.all(
        destinations.map(async (destination) => {
          let image: string;
          let flight: GetFlightFareResponseDto | string;
          const bookingUrl = generateBookingUrl(
            destination,
            filters.checkinDate,
            checkoutDate,
          );

          try {
            image = await this.unsplashService.generateImages(
              `${destination.city} ${destination.country}`,
            );
          } catch (err) {
            image = `No images available for ${destination.city} or api quota exceeded`;
          }

          try {
            flight = await this.flightFareSearchService.getFlightFare({
              from: userAirport,
              to: destination.mainAirportIATACode,
              date: filters.checkinDate,
            });
          } catch (err) {
            flight = `No flights available to ${destination.city} on ${filters.checkinDate} or api quota exceeded`;
          }

          return {
            ...destination,
            image,
            flight,
            bookingUrl,
          };
        }),
      );

      return enrichedDestinations;
    } catch (err) {
      throw new InternalServerErrorException(
        'Unable to generate travel suggestions at this time',
      );
    }
  }
}
