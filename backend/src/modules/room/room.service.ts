import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto, GetRoomsDto } from './dtos/room.dto';
import { Room } from './room.model';

@Injectable()
export class RoomService {
  constructor(@InjectModel('Room') private readonly roomModel: Model<Room>) {}

  async createRoom(createRoomDto: CreateRoomDto): Promise<Room> {
    return await this.roomModel.create(createRoomDto);
  }

  async getRooms(houseId: string) {
    return this.roomModel.find({
      houseId
    });
  }

  async getRentalFee(roomId: string) {
    const room = await this.roomModel.findById(roomId);
    return room.rentalFee;
  }
}
