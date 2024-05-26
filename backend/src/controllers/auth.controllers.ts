import { RequestHandler, Request, Response } from "express";
import { UserModel } from "../models/user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const getUser: RequestHandler = async(req: Request, res: Response) => {
    const user = req.body.user;

    res.status(200).send({
        success: true,
        message: 'Get user successfully',
        data: user
    });
}

export const getUsers: RequestHandler = async(req: Request, res: Response) => {
    try {
        const users = await UserModel.find({userType: 'user'});
        return res.status(200).send({
            success: true,
            message: 'Get users successfully',
            data: users
        });
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
}

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
    try{
        const {username, password} = req.body;
        const user = await UserModel.findOne({username: username});
        if(!user){
            return res.send({
                success: false,
                message: "Username or password is not valid"
            });
        };
    
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword){
            return res.send({
                success: false,
                message: "Username or password is not valid"
            });
        };
        const token = jwt.sign( { userId: user._id }, process.env.JWT);
        res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 3600000});
        user.password = undefined;
        return res.send({
            success: true,
            message: "User is login",
            data: user
        });

    }
    catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    };
}

export const updateUser: RequestHandler = async(req: Request, res: Response) => {
    try {
        const updatedUser = req.body.updatedUser;
        const user = await UserModel.findById(updatedUser._id);

        if(!user) {
            return res.status(404).send({success: false, message: 'User not found'});
        }

        await UserModel.findByIdAndUpdate(updatedUser._id, updatedUser, {new: true, runValidators: true});

        return res.status(200).send({success: true, message: 'User is updated successfully'});   
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
}

export const deleteUser: RequestHandler = async(req: Request, res: Response) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id);
        res.status(200).send({
            success: true,
            message: 'User is deleted'
        })  
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};

export const logoutUser = (req: Request, res: Response) => {
    try {
        res.cookie('token', '', { httpOnly: true, expires: new Date(0)});
        res.status(200).json({ success: true, message: 'Logged out successfully' });    
    } catch (error) {
        return res.send({
            success: false,
            message: error.message,
        });
    }
};


