import { Schema, Document } from 'mongoose';

export const RoomSchema = new Schema(
  {
    name: String,
    area: Number,
    rentalFee: Number,
    image: {type: String, default: ''},
    house_id: String,
    host_id: String,
    member_id: {type: [String], default: []},
    bill_id: {type: [String], default: []},
  }
);

export interface Room extends Document {
  name: number,
  area: number,
  rentalFee: number,
  image: string,
  house_id: string,
  host_id: string,
  member_id: string[],
  bill_id: string[],
}