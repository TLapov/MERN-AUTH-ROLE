import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.routes";
import { cookiesMiddleware } from './middlewares/cookies.middleware';

// CONFIG
dotenv.config();
const server = express();

server.use(express.json());
server.use(cookiesMiddleware);

// ROUTES 
server.use(process.env.BASE_PATH, authRoutes);

server.listen(3000, () => {
    mongoose.connect(process.env.MONGODB_CONN)
    .then(() => { 
        console.log("Database is connected, server is listen on http://localhost:3000") })
    .catch((err: Error) => {
        console.log(err);
    });
});
