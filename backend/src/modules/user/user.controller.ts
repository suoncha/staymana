import {Controller, Get, HttpStatus, Param, Res} from '@nestjs/common';
import { UserService } from './user.service';
import {Schema} from "mongoose";
import { Response } from 'express';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }
  @Get('/:id')
  async getUserById(@Param('id') id: string, @Res() res: Response) {
    const user: any = await this.userService.getUserById(id);
    return res.status(HttpStatus.OK).send(user);
  }
}
