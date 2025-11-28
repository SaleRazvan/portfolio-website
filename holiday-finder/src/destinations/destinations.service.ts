import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InferenceClient } from '@huggingface/inference';
import { GetDestinationsDto } from './dtos/get-destinations-dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DestinationsService {
  constructor(private configService: ConfigService) {}

  async generateDestinations(filters: GetDestinationsDto) {
    const client = new InferenceClient(
      this.configService.get<string>('HF_KEY'),
    );

    const prompt = `Suggest exactly 3 travel destinations. Use the following preferences:
- Preference: ${filters.preferences}
- Target Temperature: ${filters.temperature}
- Month of Travel: ${filters.departureMonth}

Keep all descriptions extremely concise. The output MUST be a strict JSON array containing 3 objects. Do not include any introductory text, explanation, or markdown formatting (e.g., no \`\`\`json).

JSON Array Structure:
[
  {
    "city": "...",
    "country": "...",
    "reason": "..."
    "estimatedFlightPrice": "..."
  },
  ... (2 more objects)
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

      const generatedText = response.choices[0].message.content;
      const jsonMatch = generatedText.match(/\[[\s\S]*\]/); // Look for JSON array

      if (!jsonMatch) {
        console.error('No JSON array found in response:', generatedText);
        throw new InternalServerErrorException(
          'Upstream service returned data without valid JSON array',
        );
      }

      try {
        const parsedData = JSON.parse(jsonMatch[0]);

        return parsedData;
      } catch (parseError) {
        console.error(
          'JSON parsing failed:',
          parseError,
          'Raw data:',
          jsonMatch[0],
        );
        throw new InternalServerErrorException(
          'Failed to parse JSON from upstream service response',
        );
      }
    } catch (error) {
      if (error instanceof InternalServerErrorException) {
        throw error;
      }

      console.error('Unexpected error calling AI service:', error);
      throw new InternalServerErrorException(
        'An unexpected error occurred while processing your request',
      );
    }
  }
}
