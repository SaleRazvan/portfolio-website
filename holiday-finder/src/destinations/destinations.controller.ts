import { Body, Controller, Post } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import {
  GetDestinationsDto,
  GetDestinationsResponseDto,
} from './dtos/get-destinations-dto';
import { ApiCreatedResponse, ApiOperation, ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('api-key')
@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @ApiCreatedResponse({
    type: [GetDestinationsResponseDto],
    description: 'Destinations succesfully resolved',
  })
  @ApiOperation({ summary: 'Get JSON response from LLM model for user prompt' })
  @Post()
  async getDestinations(@Body() filters: GetDestinationsDto) {
    return this.destinationsService.generateDestinations(filters);
  }
}
