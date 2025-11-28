import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { GetFlightFareDto } from './dtos/get-flight-fare-dto';
import { FlightFareSearchService } from './flight-fare-search.service';

@Controller('flight-fare-search')
export class FlightFareSearchController {
  constructor(private flightFareSearchService: FlightFareSearchService) {}

  @ApiOperation({ summary: 'Get cheapest flight to destination' })
  @Get()
  async getFlightFare(@Query() query: GetFlightFareDto) {
    return this.flightFareSearchService.getFlightFare(query);
  }
}
