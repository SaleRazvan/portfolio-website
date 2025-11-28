import { Body, Controller, Post } from '@nestjs/common';
import { DestinationsService } from './destinations.service';
import { GetDestinationsDto } from './dtos/get-destinations-dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('destinations')
export class DestinationsController {
  constructor(private readonly destinationsService: DestinationsService) {}

  @ApiOperation({ summary: 'Get JSON response from LLM model for user prompt' })
  @Post()
  async getDestinations(@Body() filters: GetDestinationsDto) {
    return this.destinationsService.generateDestinations(filters);
  }
}
