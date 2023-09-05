//use this nodemon --expreimental-modules --es-module-specifier-resolution=node app.js in start in order to access latest es6 imports in your application. 
// const express = require ('express');


import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes.js";
dotenv.config();
const app = express();


//middlewares
app.use(express.json());
app.use("/user", userRouter);

mongoose
  .connect(`mongodb+srv://guna:${process.env.MONGODB_PASSWORD}@cluster0.j7uvt6s.mongodb.net/?retryWrites=true&w=majority`
)
 .then(()=>
    app.listen(5000,()=>
       console.log("Connect to Database and server is running")
       )
    )
    .catch((e)=> console.log(e));

// app.listen(5000,() => {
//     console.log(`Connected to server at ${5000}`);
// });
