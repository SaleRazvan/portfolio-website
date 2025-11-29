import { Test, TestingModule } from '@nestjs/testing';
import { TravelSuggestionsService } from './travel-suggestions.service';

describe('TravelSuggestionsService', () => {
  let service: TravelSuggestionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TravelSuggestionsService],
    }).compile();

    service = module.get<TravelSuggestionsService>(TravelSuggestionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
