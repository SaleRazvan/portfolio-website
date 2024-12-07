import { IsBoolean } from 'class-validator';

export class ApproveFunFactDto {
  @IsBoolean()
  approved: boolean;
}
