import {Body, Param, Controller, Get, Post, UseGuards} from '@nestjs/common';
import { CreateMonthBillDto } from './dtos/month_bill.dto';
import { CreateRepairBillDto } from './dtos/repair_bill.dto';
import { BillService } from './bill.service';
import { RoomService } from 'src/modules/room/room.service';
import {JwtAuthGuard} from "../auth/guards/jwt.guard";

@Controller('/bill')
// @UseGuards(JwtAuthGuard)
export class BillController {
  constructor(private readonly billService: BillService, private readonly roomService: RoomService) {}

  @Post('/month')
  async createMonthBill(@Body() createMonthBillDto: CreateMonthBillDto) {
    const rentalFee = await this.roomService.getRentalFee(createMonthBillDto.roomId)
    return await this.billService.createMonthBill(createMonthBillDto, rentalFee);
  }

  @Post('/repair')
  async createRepairBill (@Body() createRepairBillDto: CreateRepairBillDto) {
    return await this.billService.createRepairBill(createRepairBillDto);
  }
}
