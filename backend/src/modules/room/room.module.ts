import { Module } from '@nestjs/common';
import { RoomController } from './controllers/room.controller';
import { RoomService } from './services/room.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomSchema } from './models/room.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Room', schema: RoomSchema }])
  ],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [RoomService],
})
export class RoomModule {}
