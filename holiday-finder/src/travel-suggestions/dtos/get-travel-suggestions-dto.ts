import { ApiProperty } from '@nestjs/swagger';
import { GetFlightFareResponseDto } from 'src/flight-fare-search/dtos/get-flight-fare-dto';

export class GetTravelSuggestionsResponseDto {
  @ApiProperty()
  image: string;

  @ApiProperty({
    oneOf: [
      { type: 'string' },
      { $ref: '#/components/schemas/GetFlightFareResponseDto' },
    ],
    example: {
      id: 'FL123',
      flightName: 'AA 1234',
      stops: 0,
      cabinType: 'Economy',
      price: 350.0,
    },
  })
  flight: string | GetFlightFareResponseDto;

  @ApiProperty()
  city: string;

  @ApiProperty()
  country: string;

  @ApiProperty()
  reason: string;

  @ApiProperty()
  mainAirportIATACode: string;

  @ApiProperty()
  bookingUrl: string;
}
