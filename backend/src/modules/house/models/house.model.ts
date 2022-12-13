import { Schema, Document } from 'mongoose';

export const HouseSchema = new Schema(
  {
    name: String,
    address: String,
    image: { type: String, default: '' },
    hostId: String,
  }
);

export interface House extends Document {
  name: string,
  address: string,
  image: string,
  hostId: string,
}