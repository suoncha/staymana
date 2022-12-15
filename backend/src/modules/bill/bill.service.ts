import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMonthBillDto, GetMonthBillDto } from './dtos/month_bill.dto';
import { CreateRepairBillDto, GetRepairBillDto } from './dtos/repair_bill.dto';
import { MonthBill } from './models/month_bill.model';
import { RepairBill } from './models/repair_bill.model';

@Injectable()
export class BillService {
  constructor(
    @InjectModel('MonthBill') private readonly monthBillModel: Model<MonthBill>,
    @InjectModel('RepairBill') private readonly repairBillModel: Model<RepairBill>
  ) {}

  async createMonthBill(createMonthBillDto: CreateMonthBillDto, rentalFee: number) {
    const waterTotal = (createMonthBillDto.newWaterNumber - createMonthBillDto.oldWaterNumber) * createMonthBillDto.waterPrice;
    const electricTotal = (createMonthBillDto.newElectricNumber - createMonthBillDto.oldElectricNumber) * createMonthBillDto.electricPrice;
    const total = waterTotal + electricTotal + rentalFee;

    const newMonthBill = new this.monthBillModel({
      title: createMonthBillDto.title,
      roomId: createMonthBillDto.roomId,

      oldWaterNumber: createMonthBillDto.oldWaterNumber,
      newWaterNumber: createMonthBillDto.newWaterNumber,
      waterPrice: createMonthBillDto.waterPrice,
      waterTotal: waterTotal,

      oldElectricNumber: createMonthBillDto.oldElectricNumber,
      newElectricNumber: createMonthBillDto.newElectricNumber,
      electricPrice: createMonthBillDto.electricPrice,
      electricTotal: electricTotal,

      rentalFee: rentalFee,

      expiration: new Date(createMonthBillDto.expiration),
      isPay: false,

      total: total,
    })

    return await newMonthBill.save();
  }

  async createRepairBill(createRepairBillDto: CreateRepairBillDto) {
    const newRepairBill = new this.repairBillModel({
      title: createRepairBillDto.title,
      content: createRepairBillDto.content,
      roomId: createRepairBillDto.roomId,
      expiration: new Date(createRepairBillDto.expiration),
      isPay: false,
      total: createRepairBillDto.total
    })

    return await newRepairBill.save()
  }

  async getMonthBill(getMonthBillDto: GetMonthBillDto ) {
    return await this.monthBillModel.find(getMonthBillDto);
  }

  async getRepairBill(getRepairBillDto: GetRepairBillDto ) {
    return await this.repairBillModel.find(getRepairBillDto);
  }
}
