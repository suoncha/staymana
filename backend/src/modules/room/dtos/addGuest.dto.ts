import { IsDefined } from 'class-validator';

export class AddGuestDto {
  @IsDefined()
  guestId: string;

  @IsDefined()
  roomId: string;
}