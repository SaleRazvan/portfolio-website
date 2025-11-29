import { Controller, Get, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import {
  GetFlightFareDto,
  GetFlightFareResponseDto,
} from './dtos/get-flight-fare-dto';
import { FlightFareSearchService } from './flight-fare-search.service';

@ApiSecurity('api-key')
@Controller('flight-fare-search')
export class FlightFareSearchController {
  constructor(private flightFareSearchService: FlightFareSearchService) {}

  @ApiOkResponse({
    type: GetFlightFareResponseDto,
    description: 'Flight succesfully resolved',
  })
  @ApiOperation({ summary: 'Get cheapest flight to destination' })
  @Get()
  async getFlightFare(@Query() query: GetFlightFareDto) {
    return this.flightFareSearchService.getFlightFare(query);
  }
}
