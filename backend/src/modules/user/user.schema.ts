import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from './constants/user-role';
import { Gender } from './constants/gender';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  role: UserRole;

  @Prop()
  tel: string;

  @Prop()
  password: string;

  @Prop()
  name: string;

  @Prop()
  identityNumber: string;

  @Prop()
  email: string;

  @Prop()
  avatar: string;

  @Prop()
  gender: Gender;

  @Prop()
  dob: Date;

  @Prop()
  qrCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
