import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type HouseDocument = HydratedDocument<House>;

@Schema()
export class House {
    @Prop()
    _id: string;

    @Prop()
    name: string;

    @Prop()
    address: string;

    @Prop()
    rule: string;

    @Prop()
    hostId: string;
}

export const HouseSchema = SchemaFactory.createForClass(House);