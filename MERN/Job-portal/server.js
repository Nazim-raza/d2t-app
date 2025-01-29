//imports packages
//const express = require('express') // this require syntax is commonjs type for nodejs

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import "express-async-error";

//file imports
import connectDB from "./config/db.js";
//routes import
import testRoutes from "./routes/testRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";
import jobsRoutes from "./routes/jobsRoutes.js";
import userRoutes from "./routes/userRoutes.js";

//dotenv config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/job", jobsRoutes);
// app.get('/',(req, res)=>{
//     res.send('<h1>Welcome to NX job Portal</h1>')
// } )

//Validation middleware
app.use(errorMiddleware);

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(8080, () => {
  console.log(
    `Node server Running in ${process.env.DEV_MODE} Mode on port ${PORT}`
  );
});
