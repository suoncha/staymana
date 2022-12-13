import {Body, Param, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { CreateRoomDto, GetRoomsDto } from './dtos/room.dto';
import { RoomService } from './room.service';
import {JwtAuthGuard} from "../auth/guards/jwt.guard";

@Controller('/room')
@UseGuards(JwtAuthGuard)
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Post()
  async createRoom(@Body() room: CreateRoomDto) {
    return await this.roomService.createRoom(room);
  }

  @Get()
  async getRooms(@Body() getRoomsDto: GetRoomsDto ) {
    return await this.roomService.getRooms(getRoomsDto);
  }
}
