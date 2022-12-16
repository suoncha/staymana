import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { HouseModule } from './modules/house/house.module';
import { RoomModule } from './modules/room/room.module';
import { BillModule } from './modules/bill/bill.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://your-ip'
    ),
    UserModule,
    AuthModule,
    HouseModule,
    RoomModule,
    BillModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
