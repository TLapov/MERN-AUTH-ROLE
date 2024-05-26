import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

const errorMiddleware: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const status = res.statusCode < 400 ? 500 : res.statusCode;
    return res.status(status).send({
        success: false,
        message: err.message
    })
}

export default errorMiddleware;