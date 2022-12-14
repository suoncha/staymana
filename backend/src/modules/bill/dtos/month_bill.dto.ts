import { IsDefined } from 'class-validator';

export class CreateMonthBillDto {
  @IsDefined()
  title: string;
  @IsDefined()
  roomId: string;

  @IsDefined()
  oldWaterNumber: number;
  @IsDefined()
  newWaterNumber: number;
  @IsDefined()
  waterPrice: number;

  @IsDefined()
  oldElectricNumber: number;
  @IsDefined()
  newElectricNumber: number;
  @IsDefined()
  electricPrice: number;

  @IsDefined()
  expiration: string;
}