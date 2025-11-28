import { Test, TestingModule } from '@nestjs/testing';
import { FlightFareSearchController } from './flight-fare-search.controller';

describe('FlightFareSearchController', () => {
  let controller: FlightFareSearchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FlightFareSearchController],
    }).compile();

    controller = module.get<FlightFareSearchController>(FlightFareSearchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
