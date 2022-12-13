import { UserRole } from '../constants/user-role';
import { IsDefined } from 'class-validator';

export class CheckUserDto {
  @IsDefined()
  role: UserRole;

  @IsDefined()
  tel: string;
}
