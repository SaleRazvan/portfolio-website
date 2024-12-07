import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AddFunFactDto } from './dtos/add-fun-fact.dto';
import { FunFactsService } from './fun-facts.service';
import { ApproveFunFactDto } from './dtos/approve-fact.dto';
import { AdminGuard } from 'src/guards/admin.guard';

@Controller('fun-facts')
export class FunFactsController {
  constructor(private funFactsService: FunFactsService) {}

  @Get('/allCountries')
  listCountries() {
    return this.funFactsService.listCountries();
  }

  @Get('/unapproved')
  getUnapprovedFunFacts() {
    return this.funFactsService.getUnapprovedFunFacts();
  }

  @Get('/:country')
  getFunFactForCountry(@Param('country') country: string) {
    return this.funFactsService.getFunFactForCountry(country);
  }

  @Post()
  addFunFactForCountry(@Body() body: AddFunFactDto) {
    return this.funFactsService.create(body);
  }

  @Patch('/:id')
  @UseGuards(AdminGuard)
  approveFunFact(@Param('id') id: string, @Body() body: ApproveFunFactDto) {
    return this.funFactsService.changeApproval(id, body.approved);
  }
}
