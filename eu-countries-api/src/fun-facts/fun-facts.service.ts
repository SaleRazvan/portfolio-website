import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddFunFactDto } from './dtos/add-fun-fact.dto';
import { FunFact } from './fun-facts.entity';

@Injectable()
export class FunFactsService {
  constructor(@InjectRepository(FunFact) private repo: Repository<FunFact>) {}

  async listCountries() {
    const rawCountryData: { country: string; fact: string }[] = await this.repo
      .createQueryBuilder()
      .select('country, fact')
      .distinct(true)
      .getRawMany();

    const groupedCountries = rawCountryData.reduce<
      { country: string; facts: string[] }[]
    >((acc, countryData) => {
      const existingCountry = acc.find(
        (c) => c.country === countryData.country,
      );
      if (existingCountry) {
        existingCountry.facts.push(countryData.fact);
      } else {
        acc.push({
          country: countryData.country,
          facts: [countryData.fact],
        });
      }
      return acc;
    }, []);

    return groupedCountries;
  }

  async getFunFactForCountry(country: string) {
    const factForCountry = await this.repo
      .createQueryBuilder()
      .select('fact, country')
      .where('country ILIKE :country', { country: `%${country}%` })
      .andWhere('approved = true')
      .orderBy('RANDOM()')
      .getRawOne();

    if (!factForCountry)
      throw new BadRequestException(`No approved facts found for ${country}`);

    return factForCountry;
  }

  async getUnapprovedFunFacts() {
    const unapprovedFunFacts = await this.repo
      .createQueryBuilder()
      .select('id, fact, country, approved')
      .where('approved = false')
      .getRawMany();

    if (unapprovedFunFacts.length === 0)
      throw new NotFoundException('No unapproved fact found');

    return unapprovedFunFacts;
  }

  create(addFunFactDto: AddFunFactDto) {
    const funFact = this.repo.create(addFunFactDto);

    return this.repo.save(funFact);
  }

  async changeApproval(id: string, approved: boolean) {
    const funFact = await this.repo.findOne({ where: { id } });

    if (!funFact) throw new NotFoundException('funFact not found');

    funFact.approved = approved;

    return this.repo.save(funFact);
  }
}
