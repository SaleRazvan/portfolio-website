import { ApiProperty } from '@nestjs/swagger';

export class GetUserLocationResponseDto {
  @ApiProperty({ example: 'Cluj-Napoca' })
  city: string;

  @ApiProperty({ example: 'Cluj County' })
  region: string;

  @ApiProperty({ example: 'Romania' })
  country: string;

  @ApiProperty({ example: 'RO' })
  countryCode: string;

  @ApiProperty({ example: '46.7712' })
  latitude: string;

  @ApiProperty({ example: '23.6236' })
  longitude: string;

  @ApiProperty({ example: 'Europe/Bucharest' })
  timezone: string;
}
