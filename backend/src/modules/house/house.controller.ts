import {Body, Controller, Get, Post, Param, UseGuards} from '@nestjs/common';
import { CreateHouseDto, GetHousesDto } from './dtos/house.dto';
import { HouseService } from './house.service';
import { CreateRoomDto } from 'src/modules/room/dtos/room.dto';
import { RoomService } from 'src/modules/room/room.service';
import {JwtAuthGuard} from "../auth/guards/jwt.guard";

@Controller('/house')
@UseGuards(JwtAuthGuard)
export class HouseController {
  constructor(private readonly houseService: HouseService, private readonly roomService: RoomService ) {}

  @Post()
  async createHouse(@Body() createHouseDto: CreateHouseDto ) {
    const newHouse = await this.houseService.createHouse(createHouseDto);
    
    if (createHouseDto.roomInfoList) {
      createHouseDto.roomInfoList.forEach((roomInfo) => {
      const createRoomDto = new CreateRoomDto();

      createRoomDto.name = roomInfo.name;
      createRoomDto.area = roomInfo.area;
      createRoomDto.rentalFee = roomInfo.rentalFee;
      createRoomDto.image = roomInfo.image;
      createRoomDto.houseId = newHouse.id;
      createRoomDto.hostId = createHouseDto.hostId;

      this.roomService.createRoom(createRoomDto);
      })
    }
    
    return newHouse;
  }

  @Get()
  async getHouses(@Body() getHousesDto: GetHousesDto) {
    return await this.houseService.getHouses(getHousesDto);
  }
}
