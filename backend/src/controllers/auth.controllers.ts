import { RequestHandler, Request, Response } from "express";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";


export const register: RequestHandler = async(req: Request, res: Response) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username: username});
    if(user) {
        return res.status(400).send(
            {
                success: false,
                message: 'User already exsist'
            }
        )
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;

    const newUser = await new UserModel(req.body);
    await newUser.save();

    return res.status(201).send({
        success: true,
        message: "User is created",
    });
}

export const login: RequestHandler = async(req: Request, res: Response) => {

}

export const updateUser: RequestHandler = async(req: Request, res: Response) => {
    
}

export const deleteUser: RequestHandler = async(req: Request, res: Response) => {

}
