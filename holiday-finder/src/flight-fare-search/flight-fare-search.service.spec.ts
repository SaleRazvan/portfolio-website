import { Test, TestingModule } from '@nestjs/testing';
import { FlightFareSearchService } from './flight-fare-search.service';

describe('FlightFareSearchService', () => {
  let service: FlightFareSearchService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FlightFareSearchService],
    }).compile();

    service = module.get<FlightFareSearchService>(FlightFareSearchService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
