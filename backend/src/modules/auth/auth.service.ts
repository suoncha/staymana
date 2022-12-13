import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserLoginDto } from './dtos/user-login.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from '../user/user.schema';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(userLoginDto: UserLoginDto) {
    const user = await this.userModel.findOne({
      role: userLoginDto.role,
      tel: userLoginDto.tel,
    });

    return user && user.password === userLoginDto.password;
  }

  async login(tel: string) {
    return {
      access_token: this.jwtService.sign({ tel }),
    };
  }
}
