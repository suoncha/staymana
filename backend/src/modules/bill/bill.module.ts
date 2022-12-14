import { Module } from '@nestjs/common';
import { BillController } from './bill.controller';
import { BillService } from './bill.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MonthBillSchema } from './models/month_bill.model';
import { RepairBillSchema } from './models/repair_bill.model';
import { RoomModule } from '../room/room.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'MonthBill', schema: MonthBillSchema },
      { name: 'RepairBill', schema: RepairBillSchema }
    ]),
    RoomModule
  ],
  controllers: [BillController],
  providers: [BillService]
})
export class BillModule {}
