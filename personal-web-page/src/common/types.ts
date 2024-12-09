export type ApiResponse = {
  country: string;
  facts: string[];
};

export type EuCountry = ApiResponse & { latitude: number; longitude: number };
