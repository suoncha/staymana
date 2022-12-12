import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {HydratedDocument} from "mongoose";
import {UserRole} from "./constants/user-role";
import {Gender} from "./constants/gender";

export type HostDocument = HydratedDocument<Host>;

@Schema()
export class Host {
    @Prop()
    _id: string;

    @Prop()
    role: UserRole;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    name: string;

    @Prop()
    avatar: string;

    @Prop()
    gender: Gender;

    @Prop()
    dob: Date;

    @Prop()
    tel: string;
}

export const UserSchema = SchemaFactory.createForClass(Host);