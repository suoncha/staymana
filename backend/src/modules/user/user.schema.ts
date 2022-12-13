import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from './constants/user-role';
import { Gender } from './constants/gender';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true })
  role: UserRole;

  @Prop({ required: true })
  tel: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  identityNumber: string;

  @Prop()
  email: string;

  @Prop()
  image: string;

  @Prop()
  gender: Gender;

  @Prop({ required: true })
  dob: Date;

  @Prop()
  qrCode: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ tel: 1, role: 1 }, { unique: true });
