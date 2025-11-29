import { Test, TestingModule } from '@nestjs/testing';
import { GeoLocationService } from './geo-location.service';

describe('GeoLocationService', () => {
  let service: GeoLocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeoLocationService],
    }).compile();

    service = module.get<GeoLocationService>(GeoLocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
