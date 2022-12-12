import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from './user.schema';
import mongoose, {Model, Schema, Types} from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(id: string): Promise<User> {
    console.log(id);
    const user = await this.userModel.findById(id);
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found!');
    }

    return user;
  }
}
