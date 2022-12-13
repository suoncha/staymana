import { Controller, Get } from '@nestjs/common';
import { RoomService } from './room.service';

@Controller('/room')
export class RoomController {
  constructor(private readonly appService: RoomService) {}

  @Get()
  getHello() {
    return this.appService.getAll();
  }
}
