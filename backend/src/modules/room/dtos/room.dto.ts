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
  houseId: string;

  @IsDefined()
  hostId: string;
}

export class GetRoomsDto {
  @IsDefined()
  hostId: string;

  @IsDefined()
  houseId: string;
}