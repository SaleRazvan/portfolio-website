import { IsString } from 'class-validator';

export class AddFunFactDto {
  @IsString()
  country: string;

  @IsString()
  fact: string;
}
