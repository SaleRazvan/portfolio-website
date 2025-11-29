import { Module } from '@nestjs/common';
import { TravelSuggestionsService } from './travel-suggestions.service';
import { TravelSuggestionsController } from './travel-suggestions.controller';
import { DestinationsModule } from 'src/destinations/destinations.module';
import { UnsplashModule } from 'src/unsplash/unsplash.module';
import { FlightFareSearchModule } from 'src/flight-fare-search/flight-fare-search.module';
import { GeoLocationModule } from 'src/geo-location/geo-location.module';

@Module({
  providers: [TravelSuggestionsService],
  controllers: [TravelSuggestionsController],
  imports: [
    DestinationsModule,
    UnsplashModule,
    FlightFareSearchModule,
    GeoLocationModule,
  ],
  exports: [TravelSuggestionsService],
})
export class TravelSuggestionsModule {}
