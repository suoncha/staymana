import { IsDefined } from 'class-validator';

export class CreateRoomDto {
  @IsDefined()
  name: string;

  @IsDefined()
  area: number;

  @IsDefined()
  rentalFee: number;

  image?: string;

  @IsDefined()
  house_id: string;

  @IsDefined()
  host_id: string;
}

export class GetRoomsDto {
  @IsDefined()
  host_id: string;

  @IsDefined()
  house_id: string;
}