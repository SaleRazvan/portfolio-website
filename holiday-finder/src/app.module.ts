import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { DestinationsModule } from './destinations/destinations.module';
import { ConfigModule } from '@nestjs/config';
import { UnsplashModule } from './unsplash/unsplash.module';
import { FlightFareSearchModule } from './flight-fare-search/flight-fare-search.module';
import { APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { TravelSuggestionsModule } from './travel-suggestions/travel-suggestions.module';
import { GeoLocationModule } from './geo-location/geo-location.module';
import { ApiKeyGuard } from './guards/api-key.guard';

@Module({
  imports: [
    DestinationsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
    }),
    UnsplashModule,
    FlightFareSearchModule,
    ThrottlerModule.forRoot([
      {
        ttl: 60000,
        limit: 5,
      },
    ]),
    TravelSuggestionsModule,
    GeoLocationModule,
  ],
  controllers: [AppController],
  providers: [
    { provide: APP_PIPE, useValue: new ValidationPipe({ whitelist: true }) },
    { provide: APP_GUARD, useClass: ThrottlerGuard },
    { provide: APP_GUARD, useClass: ApiKeyGuard },
  ],
})
export class AppModule {}
