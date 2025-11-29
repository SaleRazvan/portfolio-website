import { Controller, Get, Query } from '@nestjs/common';
import { UnsplashService } from './unsplash.service';
import { ApiOkResponse, ApiOperation, ApiSecurity } from '@nestjs/swagger';

@ApiSecurity('api-key')
@Controller('unsplash')
export class UnsplashController {
  constructor(private unsplashService: UnsplashService) {}

  @ApiOkResponse({
    type: String,
    description: 'Images successfully resolved',
    schema: {
      type: 'string',
      example:
        'https://images.unsplash.com/photo-1553537316-86354ef82879?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4MzcwMTJ8MHwxfHNlYXJjaHwxfHxpbm5zYnJ1Y2t8ZW58MHx8fHwxNzY0MzYzNjEzfDA&ixlib=rb-4.1.0&q=85',
    },
  })
  @ApiOperation({ summary: 'Get image from unsplash using a query' })
  @Get()
  async getImages(@Query('query') query: string) {
    return this.unsplashService.generateImages(query);
  }
}
