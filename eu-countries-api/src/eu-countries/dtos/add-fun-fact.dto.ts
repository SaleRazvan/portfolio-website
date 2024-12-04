import { IsString } from 'class-validator';

export class AddFunFactDto {
  @IsString()
  fact: string;
}
