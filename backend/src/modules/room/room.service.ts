import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto, GetRoomsDto } from './dtos/room.dto';
import { Room } from './room.model';
import {AddGuestDto} from "./dtos/addGuest.dto";

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
    return room;
  }

  async updateMember(addGuestDto: AddGuestDto){
    const room = await this.roomModel.findById(addGuestDto.roomId);
    const newMemberId = room.memberId;
    newMemberId.push(addGuestDto.guestId);
    console.log(newMemberId)
    return this.roomModel.findOneAndUpdate({_id: addGuestDto.roomId}, {
      memberId: newMemberId
    })
  }
}
