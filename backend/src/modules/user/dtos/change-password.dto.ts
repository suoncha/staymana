import { UserRole } from '../constants/user-role';
import { IsDefined } from 'class-validator';

export class ChangePasswordDto {
  @IsDefined()
  role: UserRole;

  @IsDefined()
  tel: string;

  @IsDefined()
  password: string;
}
