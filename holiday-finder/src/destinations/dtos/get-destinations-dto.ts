import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, Matches } from 'class-validator';

export class GetDestinationsDto {
  @ApiProperty({ description: 'User preferences as prompt' })
  @IsString()
  preferences: string;

  @ApiProperty({ description: 'Temperature as range' })
  @IsString()
  temperature: string;

  @ApiProperty({ description: 'Checkin Date (YYYY-MM-DD)' })
  @IsString()
  @Matches(/^\d{4}-\d{2}-\d{2}$/, {
    message: 'checkinDate must be in YYYY-MM-DD format',
  })
  checkinDate: string;

  @ApiProperty({ description: 'Optimal stay - number of days' })
  @IsNumber()
  days: number;
}

export class GetDestinationsResponseDto {
  @ApiProperty({ example: 'Paris' })
  city: string;

  @ApiProperty({ example: 'France' })
  country: string;

  @ApiProperty({ example: 'Known for romantic atmosphere and cuisine' })
  reason: string;

  @ApiProperty({ example: 'CDG' })
  mainAirportIATACode: string;
}
