import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/authentication/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://vu:vu@34.143.240.21:27017/staymana?authSource=admin',
    ),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
