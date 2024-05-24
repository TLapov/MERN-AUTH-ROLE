import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction, Request, RequestHandler, Response } from "express";
import { UserModel } from "../models/user.model";

export const authMiddleware: RequestHandler = async(req: Request, res: Response, next: NextFunction) => {
       try {
            const token = req.cookies.token;
            if(!token) {
                return res.status(401).send({success: false, message: 'You are not authenticated'});
            }

            const decryptedData = jwt.verify(token, process.env.JWT) as JwtPayload;
            const user = await UserModel.findOne({_id: decryptedData.userId});

            if(!user) {
                return res.status(401).send({success: false, message: 'You are not authenticated'});
            }
            console.log("Hello world")
            next();
       } catch (error) {
            return res.send({
                success: false,
                message: error.message
            });
       } 
};

export const authRoleMiddleware: RequestHandler = async(req: Request, res: Response, next: NextFunction) => {
    try {
         
         next();
    } catch (error) {
         return res.send({
             success: false,
             message: error.message
         });
    } 
};