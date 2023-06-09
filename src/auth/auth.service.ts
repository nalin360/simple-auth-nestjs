import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async signIn(username: string, pass: string, role: string): Promise<any> {
    const user = await this.usersService.findOneOnly(username);

    if (user?.password !== pass || user?.role !== role) {
      throw new UnauthorizedException();
    }
    const { userId, password, ...result } = user;

    return result;
  }

  async signInYes(username: string, pass: string, role: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user?.password !== pass || user?.role !== role) {
      throw new UnauthorizedException();
    }
    const { userId, password, ...result } = user;

    return result;
  }
}
