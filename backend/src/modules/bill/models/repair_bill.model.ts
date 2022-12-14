import { Schema, Document } from 'mongoose';

export const RepairBillSchema = new Schema(
  {
    title: String,
    content: String,
    roomId: String,

    expiration: Date,
    isPay: Boolean,

    total: Number
  }
);

export interface RepairBill extends Document {
  title: string,
  content: string,
  roomId: string,

  expiration: Date,
  isPay: boolean,

  total: number
}