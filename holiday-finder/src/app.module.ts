import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DestinationsModule } from './destinations/destinations.module';
import { ConfigModule } from '@nestjs/config';
import { UnsplashModule } from './unsplash/unsplash.module';
import { FlightFareSearchModule } from './flight-fare-search/flight-fare-search.module';

@Module({
  imports: [
    DestinationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UnsplashModule,
    FlightFareSearchModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
