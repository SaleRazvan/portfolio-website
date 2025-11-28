import { Controller, Get, Query } from '@nestjs/common';
import { UnsplashService } from './unsplash.service';
import { ApiOperation } from '@nestjs/swagger';

@Controller('unsplash')
export class UnsplashController {
  constructor(private unsplashService: UnsplashService) {}

  @ApiOperation({ summary: 'Get image from unsplash using a query' })
  @Get()
  async getImages(@Query('query') query: string) {
    return this.unsplashService.generateImages(query);
  }
}
