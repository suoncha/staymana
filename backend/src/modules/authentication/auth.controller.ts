import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller("/host")
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  getHello() {
    return this.appService.getAllHost();
  }
}
