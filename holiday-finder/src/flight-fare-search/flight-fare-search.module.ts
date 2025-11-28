import { Module } from '@nestjs/common';
import { FlightFareSearchController } from './flight-fare-search.controller';
import { FlightFareSearchService } from './flight-fare-search.service';

@Module({
  controllers: [FlightFareSearchController],
  providers: [FlightFareSearchService]
})
export class FlightFareSearchModule {}
