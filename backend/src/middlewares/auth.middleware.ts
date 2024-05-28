import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { IUser, UserModel } from "../models/user.model";

export interface IRequestWithUser extends Request {
    user: IUser 
}

export const authMiddleware: RequestHandler = async(req: IRequestWithUser, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies.token;
    
        if(!token) {
            res.status(401);
            throw new Error("You are not authenticated");
        }
        
        const decryptedData = jwt.verify(token, process.env.JWT) as JwtPayload;
        const user = await UserModel.findOne({_id: decryptedData.userId});
    
        if(!user) {
            res.status(401);
            throw new Error("You are not authenticated");
        }
        req.user = user;
        next();    
    } catch (error) {
        next(error);
    }
};

export const authRoleMiddleware: RequestHandler = async(req: IRequestWithUser, res: Response, next: NextFunction) => {
    try {
        const user = req.user;
    
        if(user.userType !== 'admin') {
            res.status(401);
            throw new Error("You are not authenticated");
        }
        next();        
    } catch (error) {
        next(error);
    }

};