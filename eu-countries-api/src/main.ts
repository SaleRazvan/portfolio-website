import { NestFactory } from '@nestjs/core';
import { EuCountriesModule } from './eu-countries/eu-countries.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(EuCountriesModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
