import { IsDefined } from 'class-validator';

export class CreateRepairBillDto {
  @IsDefined()
  title: string;
  @IsDefined()
  content: string;
  @IsDefined()
  roomId: string;

  @IsDefined()
  expiration: string;

  @IsDefined()
  total: number;
}

export class GetRepairBillDto {
  @IsDefined()
  roomId: string;
}