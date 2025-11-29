import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
  constructor(
    private configService: ConfigService,
    private httpService: HttpService,
  ) {}

  async generateImages(query: string) {
    try {
      const unsplashKey = this.configService.get<string>('UNSPLASH_KEY');

      const { data } = await this.httpService.axiosRef.get<UnsplashResponse>(
        'https://api.unsplash.com/search/photos',
        {
          params: { page: 1, query },
          headers: {
            Authorization: `Client-ID ${unsplashKey}`,
          },
        },
      );

      return data.results[0].urls.full;
    } catch (error) {
      if (error.response?.status) {
        throw new HttpException(
          error.response.data?.message || error.message,
          error.response.status,
        );
      }

      throw new HttpException(
        'Failed to fetch image information',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
