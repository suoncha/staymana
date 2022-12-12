import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/CreateUserDto';

@Controller('/user')
export class UserController {
  constructor(
    @InjectConnection() private readonly mongoConnection: Connection,
    private readonly userService: UserService,
  ) {}

  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/:id')
  async getUserById(@Param('id') id: string, @Res() res: Response) {
    const user: any = await this.userService.getUserById(id);
    return res.status(HttpStatus.OK).send(user);
  }

  @Post('/register')
  async createUser(@Body() createUserDto: CreateUserDto, @Res() res: Response) {
    const session = await this.mongoConnection.startSession();
    session.startTransaction();
    try {
      const newUser: any = await this.userService.createUser(
        createUserDto,
        session,
      );
      await session.commitTransaction();
      return res.status(HttpStatus.CREATED).send(newUser);
    } catch (error) {
      await session.abortTransaction();
      throw new BadRequestException(error);
    } finally {
      await session.endSession();
    }
  }
}
