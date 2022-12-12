import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller("/host")
export class UserController {
  constructor(private readonly appService: UserService) {}

  @Get()
  getHello() {
    return this.appService.getAllHost();
  }
}
