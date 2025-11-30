import {
  BadGatewayException,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InferenceClient } from '@huggingface/inference';
import {
  GetDestinationsDto,
  GetDestinationsResponseDto,
} from './dtos/get-destinations-dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DestinationsService {
  constructor(private configService: ConfigService) {}

  async generateDestinations(
    filters: GetDestinationsDto,
  ): Promise<Array<GetDestinationsResponseDto>> {
    const client = new InferenceClient(
      this.configService.get<string>('HF_KEY'),
    );

    const prompt = `Suggest exactly 3 travel destinations. Use the following preferences:
- Preference: ${filters.preferences}
- Target Temperature: ${filters.temperature}
- Time of Travel: ${filters.checkinDate}

Keep all descriptions extremely concise. The output MUST be a strict JSON array containing 3 objects. Do not include any introductory text, explanation, or markdown formatting (e.g., no \`\`\`json).

JSON Array Structure:
[
  {
    "city": "...",
    "country": "...",
    "reason": "...",
    "mainAirportIATACode": "..."
  },
  ... (2 more objects)

  For the "reason" field: provide 2-3 short, compelling phrases that explain why this destination matches the preferences. Cover aspects like key attractions, weather conditions, and what makes it appealing for this time period
]`;

    try {
      const response = await client.chatCompletion({
        model: 'deepseek-ai/DeepSeek-V3',
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      });

      const generatedText = response?.choices?.[0]?.message?.content;

      if (!generatedText) {
        throw new BadGatewayException(
          `AI model returned empty response for prompt`,
        );
      }

      const jsonMatch = generatedText.match(/\[[\s\S]*\]/); // Look for JSON array

      if (!jsonMatch) {
        throw new BadGatewayException(
          'Upstream service returned data without valid JSON array',
        );
      }

      try {
        const parsedData: Array<GetDestinationsResponseDto> = JSON.parse(
          jsonMatch[0],
        );

        return parsedData;
      } catch (parseError) {
        throw new BadGatewayException(
          'Failed to parse JSON from upstream service response',
        );
      }
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
        'Unexpected error calling AI service',
      );
    }
  }
}
