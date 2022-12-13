import { IsDefined } from 'class-validator';

export class CreateHouseDto {
  @IsDefined()
  name: string;

  @IsDefined()
  address: string;

  image?: string;

  @IsDefined()
  hostId: string;

  roomInfoList?: Array<RoomInfo>;
}

class RoomInfo {
  name: string;
  area: number;
  rentalFee: number;
  image: string;
}

export class GetHousesDto {
  @IsDefined()
  hostId: string;
}
