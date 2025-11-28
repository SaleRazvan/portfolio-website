import { Test, TestingModule } from '@nestjs/testing';
import { UnsplashController } from './unsplash.controller';

describe('UnsplashController', () => {
  let controller: UnsplashController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnsplashController],
    }).compile();

    controller = module.get<UnsplashController>(UnsplashController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
