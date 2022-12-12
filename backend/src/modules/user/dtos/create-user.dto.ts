import { Gender } from '../constants/gender';
import { UserRole } from '../constants/user-role';
import { IsDefined } from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  role: UserRole;

  @IsDefined()
  name: string;

  @IsDefined()
  image: string;

  @IsDefined()
  gender: Gender;

  dob?: Date;

  @IsDefined()
  identityNumber: string;

  @IsDefined()
  tel: string;

  email?: string;

  @IsDefined()
  password: string;
}
