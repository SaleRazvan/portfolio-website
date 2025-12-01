export type ApiResponse = {
  country: string;
  facts: string[];
};

export type EuCountry = ApiResponse & { latitude: number; longitude: number };

export type FlightResponse =
  | {
      id: string;
      flightName: string;
      stops: string;
      cabinType: string;
      price: number;
    }
  | string;

export type TravelSuggestionsResponse = Array<{
  city: string;
  country: string;
  reason: string;
  mainAirportIATACode: string;
  image: string;
  flight: FlightResponse;
  bookingUrl: string;
}>;
