import { Module } from '@nestjs/common';
import { HouseController } from './house.controller';
import { HouseService } from './house.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './house.model';
import { RoomModule } from '../room/room.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'House', schema: HouseSchema }]),
    RoomModule
  ],
  controllers: [HouseController],
  providers: [HouseService],
})
export class HouseModule {}
