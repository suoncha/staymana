import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Host, HostDocument } from './auth.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Host.name) private hostModel: Model<HostDocument>) {}

  async getAll(): Promise<Host[]> {
    return this.hostModel.find();
  }
}
