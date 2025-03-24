import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'

import authRoutes from './routes/authRoutes.js'
import messageRoutes from './routes/messageRoutes.js' 
import userRoutes from './routes/userRoutes.js'

import connectDB from './database/db.js'

dotenv.config();

const app = express();
const PORT  = process.env.PORT;


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`)
  connectDB();
})