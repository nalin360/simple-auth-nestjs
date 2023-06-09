import { Body, Controller, Get, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService , User } from '../users/users.service';
@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService,
      ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password , signInDto.role);
  }

  @Post('signIn')
  signInO(@Body() signInDto: Record<string, any>) {
    return this.authService.signInYes(signInDto.username, signInDto.password , signInDto.role);
  }
  @Get('users')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Post('users')
  async createUser(@Body() createUserDto: User) {
    return this.usersService.create(createUserDto);
  }

}
