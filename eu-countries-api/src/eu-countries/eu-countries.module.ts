import { Module } from '@nestjs/common';
import { EuCountriesController } from './eu-countries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [EuCountriesController],
})
export class EuCountriesModule {}
