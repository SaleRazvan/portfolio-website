import { Test, TestingModule } from '@nestjs/testing';
import { TravelSuggestionsController } from './travel-suggestions.controller';

describe('TravelSuggestionsController', () => {
  let controller: TravelSuggestionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TravelSuggestionsController],
    }).compile();

    controller = module.get<TravelSuggestionsController>(TravelSuggestionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
