import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Schema as MongoSchema } from 'mongoose';

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
  @Prop()
  _id: string;

  @Prop()
  roomNumber: number;

  @Prop()
  area: number;

  @Prop()
  rentalFee: number;

  @Prop()
  image: string;

  @Prop()
  bills: [Object];

  @Prop()
  members: [MongoSchema.Types.ObjectId];

  @Prop()
  hostId: MongoSchema.Types.ObjectId;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
