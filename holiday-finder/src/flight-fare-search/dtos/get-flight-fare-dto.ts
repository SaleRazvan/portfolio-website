import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class GetFlightFareDto {
  @ApiProperty({ description: 'Original airport' })
  @IsString()
  from: string;

  @ApiProperty({ description: 'Destination airport' })
  @IsString()
  to: string;

  @ApiProperty({ description: 'Date' })
  @IsString()
  date: string;
}
