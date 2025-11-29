import { Module } from '@nestjs/common';
import { UnsplashController } from './unsplash.controller';
import { UnsplashService } from './unsplash.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [UnsplashController],
  providers: [UnsplashService],
  exports: [UnsplashService],
})
export class UnsplashModule {}
