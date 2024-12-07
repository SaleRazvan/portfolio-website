import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FunFactsController } from './fun-facts.controller';
import { FunFact } from './fun-facts.entity';
import { FunFactsService } from './fun-facts.service';

@Module({
  imports: [TypeOrmModule.forFeature([FunFact])],
  controllers: [FunFactsController],
  providers: [FunFactsService],
})
export class FunFactsModule {}
