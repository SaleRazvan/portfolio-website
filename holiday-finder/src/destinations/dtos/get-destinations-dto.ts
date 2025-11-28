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
