import { Schema, Document } from 'mongoose';

export const MonthBillSchema = new Schema(
  {
    title: String,
    roomId: String,

    oldWaterNumber: Number,
    newWaterNumber: Number,
    waterPrice: Number,
    waterTotal: Number,

    oldElectricNumber: Number,
    newElectricNumber: Number,
    electricPrice: Number,
    electricTotal: Number,

    rentalFee: Number,

    expiration: Date,
    isPay: Boolean,

    total: Number
  }
);

export interface MonthBill extends Document {
  title: string,
  roomId: string,

  oldWaterNumber: number,
  newWaterNumber: number,
  waterPrice: number,
  waterTotal: number,

  oldElectricNumber: number,
  newElectricNumber: number,
  electricPrice: number,
  electricTotal: number,

  rentalFee: number,

  expiration: Date,
  isPay: boolean,

  total: number
}