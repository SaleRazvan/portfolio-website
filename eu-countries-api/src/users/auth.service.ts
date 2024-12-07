import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { promisify } from 'util';
import { scrypt as _scrypt, randomBytes } from 'crypto';
import { ConfigService } from '@nestjs/config';

const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private configService: ConfigService,
  ) {}

  async signup(email: string, password: string, adminKey?: string) {
    const users = await this.usersService.find(email);

    if (users.length) throw new BadRequestException('email in use');

    const salt = randomBytes(8).toString('hex');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    const result = salt + '.' + hash.toString('hex');

    const adminHash = (await scrypt(adminKey ?? '', '', 32)) as Buffer;

    const isAdmin =
      adminHash.toString('hex') === this.configService.get<string>('ADMIN_KEY');

    const user = this.usersService.create(email, result, isAdmin);

    return user;
  }

  async signin(email: string, password: string) {
    const [user] = await this.usersService.find(email);

    if (!user) throw new NotFoundException('user not found');

    const [salt, storedHash] = user.password.split('.');

    const hash = (await scrypt(password, salt, 32)) as Buffer;

    if (storedHash === hash.toString('hex')) return user;
    else throw new BadRequestException('bad password');
  }
}
