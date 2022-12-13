import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto, GetRoomsDto } from './dtos/room.dto';
import { Room } from './models/room.model';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly roomModel: Model<Room>) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    return await this.roomModel.create(createRoomDto);
  }

  async getRooms(getRoomsDto: GetRoomsDto ) {
    const rooms = await this.roomModel.find(getRoomsDto);
    return rooms.map((room) => ({
      image: room.image,
      name: room.name,
    }))
  }
}
