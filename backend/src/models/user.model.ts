import { Schema, model } from "mongoose";

interface IUser {
    userType: string;
    username: string;
    password: string;
    email?: string;
    phone?: number;
    __v: number
};

export const userSchema = new Schema<IUser>({
    userType: {
        type: String,
        required: true,
        enum: ["admin", "user"],
        default: 'user'
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email:{ type: String, unique: true },
    phone: Number,
    __v: {type: Number, select: false}
});

export const UserModel = model<IUser>('User', userSchema);