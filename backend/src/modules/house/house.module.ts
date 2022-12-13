import { Module } from '@nestjs/common';
import { HouseController } from './controllers/house.controller';
import { HouseService } from './services/house.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HouseSchema } from './models/house.model';
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
