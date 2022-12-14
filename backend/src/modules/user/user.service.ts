import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "./dtos/create-user.dto";
import { CheckUserDto } from "./dtos/check-user.dto";
import { ChangePasswordDto } from "./dtos/change-password.dto";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find();
  }

  async getUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);

    if (!user) {
      throw new NotFoundException("User not found!");
    }

    return user;
  }

  async getUserByRoleAndTel(checkUserDto: CheckUserDto): Promise<User> {
    return this.userModel.findOne({
      role: checkUserDto.role,
      tel: checkUserDto.tel
    });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create(createUserDto);
  }

  async changePassword(changePasswordDto: ChangePasswordDto): Promise<User> {
    await this.userModel.findOneAndUpdate({
      role: changePasswordDto.role,
      tel: changePasswordDto.tel,
      password: changePasswordDto.password
    });
  }
}
