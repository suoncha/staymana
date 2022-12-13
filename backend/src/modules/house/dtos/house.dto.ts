import { IsDefined } from 'class-validator';

export class CreateHouseDto {
  @IsDefined()
  name: string;

  @IsDefined()
  address: string;

  image?: string;

  @IsDefined()
  host_id: string;

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
  host_id: string;

  @IsDefined()
  house_id: string;
}
