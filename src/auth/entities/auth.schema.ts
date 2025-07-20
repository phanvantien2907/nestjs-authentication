import { Prop, SchemaFactory, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { version } from "os";

@Schema({ versionKey: false, timestamps: true })
export class Auth extends Document {
    @Prop({ required: true, unique: true })
    username: string;

    @Prop({ required: true })
    fullname: string

    @Prop({ required: true })
    password: string;

}
export const AuthSchema = SchemaFactory.createForClass(Auth);
