// import { UserRole } from '../../user/constants/user-role';

import { IsDefined } from 'class-validator';

export class UserLoginDto {
  @IsDefined()
  tel: string;

  @IsDefined()
  password: string;

  @IsDefined()
  role: string;
}
