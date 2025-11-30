import { InferenceClient } from '@huggingface/inference';
import {
  Injectable,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  BadGatewayException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { Request } from 'express';
import { GetUserLocationResponseDto } from './dtos/get-user-location-dto';

@Injectable()
export class GeolocationService {
  constructor(private configService: ConfigService) {}

  async getLocationByIP(ip: string): Promise<GetUserLocationResponseDto> {
    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);

      return {
        city: response.data.city,
        region: response.data.region,
        country: response.data.country_name,
        countryCode: response.data.country_code,
        latitude: response.data.latitude,
        longitude: response.data.longitude,
        timezone: response.data.timezone,
      };
    } catch (error) {
      console.log('WAS THE GEOLOCATION SERVICE THAT FAILED');

      if (error.response?.status) {
        throw new HttpException(
          error.response.data?.message || error.message,
          error.response.status,
        );
      }

      throw new HttpException(
        'Failed to get location',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getLocationFromRequest(request: Request) {
    // Get IP from request
    const ip =
      request.headers['x-forwarded-for']?.toString().split(',')[0] ||
      request.headers['x-real-ip']?.toString() ||
      request.socket.remoteAddress ||
      request.ip;

    // add fallback for local
    const effectiveIp =
      process.env.NODE_ENV === 'development' ? '78.96.147.195' : ip;

    // Remove IPv6 prefix if present
    const cleanIP = effectiveIp.replace('::ffff:', '');

    return this.getLocationByIP(cleanIP);
  }

  async getUserAirportByLocation(city: string, country: string) {
    const client = new InferenceClient(
      this.configService.get<string>('HF_KEY'),
    );

    const prompt = `You are an airport code lookup assistant. Given a city and country, return the IATA code (3-letter airport code) for the main international airport serving that city.

Instructions:
- Return only the 3-letter IATA code
- If there are multiple airports, return the code for the primary/largest international airport
- Do not include explanations unless specifically requested

City: ${city},
Country: $${country}
`;

    console.log('RECEIVED CITY AND COUNTRY', city, country);

    try {
      const response = await client.chatCompletion({
        model: 'deepseek-ai/DeepSeek-V3',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
        // max_tokens: 10, // Limit tokens since we only need 3-letter code
      });

      const generatedText = response?.choices?.[0]?.message?.content;

      console.log('RECEIVED GEN TEXT', generatedText);

      if (!generatedText) {
        throw new BadGatewayException(
          `AI model returned empty response for airport code lookup: ${city}, ${country}`,
        );
      }

      // Extract and validate IATA code (should be 3 uppercase letters)
      const iataMatch = generatedText.match(/\b[A-Z]{3}\b/);
      if (!iataMatch) {
        throw new BadGatewayException('Failed to parse airport code');
      }

      return iataMatch[0];
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }

      if (error.response?.status) {
        throw new HttpException(
          `AI service error: ${error.response.data?.message || error.message}`,
          error.response.status,
        );
      }

      throw new InternalServerErrorException(
        'Unexpected error retrieving airport code',
      );
    }
  }
}
