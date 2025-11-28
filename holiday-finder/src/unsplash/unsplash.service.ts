import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

type UnsplashResponse = {
  results: Array<{
    urls: {
      full: string;
    };
  }>;
};

@Injectable()
export class UnsplashService {
  constructor(private configService: ConfigService) {}

  async generateImages(query: string) {
    try {
      const unsplashKey = this.configService.get<string>('UNSPLASH_KEY');

      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}`,
        {
          headers: {
            Authorization: `Client-ID ${unsplashKey}`,
          },
        },
      );

      const data: UnsplashResponse = await response.json();

      return data.results[0].urls.full;
    } catch (parseError) {
      throw new InternalServerErrorException();
    }
  }
}
