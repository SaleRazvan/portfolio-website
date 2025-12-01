import { ApiProperty } from '@nestjs/swagger';

export class GetUserLocationResponseDto {
  @ApiProperty({ example: 'Cluj-Napoca' })
  city: string;

  @ApiProperty({ example: 'Cluj County' })
  region: string;

  @ApiProperty({ example: 'Romania' })
  country: string;

  @ApiProperty({ example: 'Europe/Bucharest' })
  timezone: string;
}
