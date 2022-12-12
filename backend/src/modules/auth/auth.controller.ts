import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dtos/user-login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() userLoginDto: UserLoginDto) {
    if (!(await this.authService.validateUser(userLoginDto))) {
      throw new UnauthorizedException();
    }

    return this.authService.login(userLoginDto.tel);
  }
}
