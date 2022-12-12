import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";

export type HostDocument = HydratedDocument<Host>;

@Schema()
export class Host {
    @Prop()
    _id: string;

    @Prop({required: true})
    email: string;

    @Prop()
    password: string;

    @Prop()
    name: string;

    @Prop()
    avatar: string;

    @Prop()
    gender: string;

    @Prop()
    dob: string;

    @Prop()
    tel: string;

    @Prop()
    houseList: [string];
}

export const AuthSchema = SchemaFactory.createForClass(Host);