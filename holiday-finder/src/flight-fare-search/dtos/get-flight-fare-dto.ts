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

export class GetFlightFareResponseDto {
  @ApiProperty({ example: 'FL123456' })
  id: string;

  @ApiProperty({ example: 'American Airlines 1234' })
  flightName: string;

  @ApiProperty({ example: 'Direct' })
  stops: string;

  @ApiProperty({ example: 'Economy' })
  cabinType: string;

  @ApiProperty({ example: 350.0 })
  price: number;
}
