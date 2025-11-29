import { Module } from '@nestjs/common';
import { FlightFareSearchController } from './flight-fare-search.controller';
import { FlightFareSearchService } from './flight-fare-search.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [FlightFareSearchController],
  providers: [FlightFareSearchService],
  exports: [FlightFareSearchService],
})
export class FlightFareSearchModule {}
