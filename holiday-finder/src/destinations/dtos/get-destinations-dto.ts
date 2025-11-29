import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetDestinationsDto {
  @ApiProperty({ description: 'User preferences as prompt' })
  @IsString()
  preferences: string;

  @ApiProperty({ description: 'Temperature as range' })
  @IsString()
  temperature: string;

  @ApiProperty({ description: 'Departure month (i.e. december)' })
  @IsString()
  departureMonth: string;
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
