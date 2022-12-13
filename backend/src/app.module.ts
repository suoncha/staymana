import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { HouseModule } from './modules/house/house.module';
import { RoomModule } from './modules/room/room.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://vu:vu@34.143.240.21:27017/staymana?authSource=admin',
    ),
    UserModule,
    AuthModule,
    HouseModule,
    RoomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
