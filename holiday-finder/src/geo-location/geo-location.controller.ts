import { Controller, Get, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { GeolocationService } from './geo-location.service';
import { ApiOkResponse, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { GetUserLocationResponseDto } from './dtos/get-user-location-dto';

@ApiSecurity('api-key')
@Controller('geolocation')
export class GeolocationController {
  constructor(private readonly geolocationService: GeolocationService) {}

  @ApiOkResponse({
    type: GetUserLocationResponseDto,
    description: 'Location succesfully resolved',
  })
  @ApiOperation({ summary: 'Get user location from request IP' })
  @Get()
  async getUserLocation(@Req() request: Request) {
    return this.geolocationService.getLocationFromRequest(request);
  }

  @ApiOkResponse({
    type: String,
    description: 'Airports successfully resolved',
    schema: {
      type: 'string',
      example: 'CLJ',
    },
  })
  @ApiOperation({ summary: 'Get user main airport from city/country' })
  @Get('airports')
  async getUserAirportByLocation(
    @Query('city') city: string,
    @Query('country') country: string,
  ) {
    return this.geolocationService.getUserAirportByLocation(city, country);
  }
}
