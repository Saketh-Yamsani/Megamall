import express from "express";
import colors from "colors";
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoutes.js'
import cors from "cors";
import productRoutes from './routes/productRoutes.js'
import mongoose from "mongoose";

// configure env
dotenv.config()
// database config
connectDB();
// rest object
const app=express();
app.use(cors(
    {
        origin:["https://ecom.vercel.app"],
        methods:["POST","GET"],
        credentials:true
    }
));
//middleware
app.use(express.json())
app.use(morgan('dev'))
mongoose.connect('mongodb+srv://5sakethyamsani:30082005Saketh@@cluster0.bjcrm0e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',productRoutes)

// rest api
app.get("/",(req,res)=>{
    res.send("<h2>Welcome to e-commerce website </h2> ");

});
//PORT
const PORT=process.env.PORT || 8000;
//run listen
app.listen(PORT,() => {
    console.log(`Server is running on ${process.env.DEV_MODE} mode on port ${PORT}.......`.red);
});
