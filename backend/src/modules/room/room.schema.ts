import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
    @Prop()
    _id: string;

    @Prop()
    number: number;

    @Prop()
    area: number;

    @Prop()
    bills: [Object];
}

export const RoomSchema = SchemaFactory.createForClass(Room);