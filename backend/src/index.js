import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
dotenv.config();

import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js';

const app=express();
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRoutes);
app.use('/api/message',messageRoutes);
const PORT=process.env.PORT;

app.listen(5001,()=>{
    console.log(`Server is running on ${PORT}`);
    connectDB();
})