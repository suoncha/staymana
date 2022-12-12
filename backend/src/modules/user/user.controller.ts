import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Response } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { CheckUserDto } from './dtos/check-user.dto';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@Controller('/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUsers() {
    return this.userService.getAllUsers();
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async getUserById(@Param('id') id: string, @Res() res: Response) {
    const user: any = await this.userService.getUserById(id);
    return res.status(HttpStatus.OK).send(user);
  }

  @Post('/validate')
  @HttpCode(HttpStatus.OK)
  async validateUser(@Body() checkUserDto: CheckUserDto) {
    const user = await this.userService.getUserByRoleAndTel(checkUserDto);
    return !user;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto) {
    return await this.userService.createUser(createUserDto);
  }
}
