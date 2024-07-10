import express from 'express';
// import mongoose from 'mongoose';
import cors from 'cors';
import { connectDB } from './config/db.js';
import animeRouter from './routes/animeRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';



// app config
const app = express()
const port = process.env.PORT || 8000;

// middleware
app.use(express.json())
app.use(cors())

// connecting DB 
connectDB();


// api endpoints
app.use("/api/anime", animeRouter)
app.use("/images", express.static('uploads'))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get("/", (req, res) => {
    res.send("Expres App is running");
  });


app.listen(port,() => {
    console.log(`server started on http://localhost:${port}`)
})
