import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AddFunFactDto } from './dtos/add-fun-fact.dto';

@Controller('eu-countries')
export class EuCountriesController {
  @Get('/all')
  listCountries() {}

  @Get('/:name')
  getFunFactForCountry(@Param('name') name: string) {
    console.log(name);
  }

  @Post()
  addFunFactForCountry(@Body() body: AddFunFactDto) {
    console.log(body.fact);
  }
}
