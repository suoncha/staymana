import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Host, HostDocument} from "./user.schema";
import {Model} from "mongoose";

@Injectable()
export class UserService {
  constructor(@InjectModel(Host.name) private hostModel: Model<HostDocument>) {}

  async getAllHost(): Promise<Host[]> {
    return this.hostModel.find();
  }
}
