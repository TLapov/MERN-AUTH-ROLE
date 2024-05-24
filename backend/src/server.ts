import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.routes";

// CONFIG
dotenv.config();
const server = express();

server.use(express.json());

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
