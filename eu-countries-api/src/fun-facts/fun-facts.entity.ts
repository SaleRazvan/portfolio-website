import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('fun_fact')
export class FunFact {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  country: string;

  @Column()
  fact: string;

  @Column({ default: false })
  approved: boolean;
}
