import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { House, HouseDocument } from './house.schema';
import { Model } from 'mongoose';

@Injectable()
export class HouseService {
  constructor(
    @InjectModel(House.name) private houseModel: Model<HouseDocument>,
  ) {}

  async getAll(): Promise<House[]> {
    return this.houseModel.find();
  }
}
