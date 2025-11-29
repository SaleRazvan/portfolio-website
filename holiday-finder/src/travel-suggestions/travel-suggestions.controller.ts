import { Body, Controller, Post, Req } from '@nestjs/common';
import { TravelSuggestionsService } from './travel-suggestions.service';
import { GetTravelSuggestionsResponseDto } from './dtos/get-travel-suggestions-dto';
import { ApiCreatedResponse, ApiOperation, ApiSecurity } from '@nestjs/swagger';
import { GetDestinationsDto } from 'src/destinations/dtos/get-destinations-dto';

@ApiSecurity('api-key')
@Controller('travel-suggestions')
export class TravelSuggestionsController {
  constructor(private travelSuggestionsService: TravelSuggestionsService) {}

  @ApiCreatedResponse({
    type: GetTravelSuggestionsResponseDto,
    description: 'Travel suggestions successfully generated',
  })
  @ApiOperation({
    summary: 'Main endpoint. Merges all the other in an unified response',
  })
  @Post()
  async getTravelSuggestions(
    @Body() filters: GetDestinationsDto,
    @Req() request,
  ) {
    return this.travelSuggestionsService.getTravelSuggestions(filters, request);
  }
}
