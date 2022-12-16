import { UserRole } from '../constants/user-role';
import { IsDefined } from 'class-validator';

export class ChangeImageDto {
  @IsDefined()
  userId: string;

  @IsDefined()
  image: string;
}
