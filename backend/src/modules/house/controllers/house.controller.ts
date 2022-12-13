import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CreateHouseDto, GetHousesDto } from '../dtos/house.dto';
import { HouseService } from '../services/house.service';
import { CreateRoomDto } from 'src/modules/room/dtos/room.dto';
import { RoomService } from 'src/modules/room/services/room.service';

@Controller('/house')
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
      createRoomDto.house_id = newHouse.id;
      createRoomDto.host_id = createHouseDto.host_id;

      this.roomService.createRoom(createRoomDto);
      })
    }
    
    return newHouse;
  }

  @Get(":host_id")
  async getHouses(@Param() getHousesDto: GetHousesDto) {
    return await this.houseService.getHouses(getHousesDto);
  }
}
