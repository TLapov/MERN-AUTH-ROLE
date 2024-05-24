import { NextFunction, Request, Response } from "express";

export const cookiesMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const cookieHeader = req.headers.cookie;
    req.cookies = {};

    if (cookieHeader) {
        const cookiesArray = cookieHeader.split(';');
        cookiesArray.forEach((cookie: string) => {
            const [name, ...rest] = cookie.split('=');
            const value = rest.join('=').trim();
            if (name && value) {
                req.cookies[name.trim()] = decodeURIComponent(value);
            }
        });
    }
    next();
};
