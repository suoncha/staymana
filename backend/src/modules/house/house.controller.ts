import { Controller, Get } from '@nestjs/common';
import { HouseService } from './house.service';

@Controller("/host")
export class HouseController {
  constructor(private readonly appService: HouseService) {}

  @Get()
  getHello() {
    return this.appService.getAllHost();
  }
}
