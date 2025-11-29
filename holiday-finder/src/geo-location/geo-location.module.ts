import { Module } from '@nestjs/common';
import { GeolocationService } from './geo-location.service';
import { GeolocationController } from './geo-location.controller';

@Module({
  providers: [GeolocationService],
  controllers: [GeolocationController],
  exports: [GeolocationService],
})
export class GeoLocationModule {}
