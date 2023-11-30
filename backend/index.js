import 'dotenv/config';
import express from "express";
import {PORT, uri} from "./config.js";
import mongoose from "mongoose";
import flipkartRoutes from "./routes/flipkartRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use("/",flipkartRoutes);

app.use(cors({
    origin:"http:localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : ['Content-Type']
}));



mongoose.connect(uri).then(() => { 
    console.log("App is connected to the database.");

    app.listen(PORT, ()=>{
        console.log(`Sever is connected to the ${PORT}`)
    });

}).catch((error)=>{
    console.log(error);
});

app.use("/items", flipkartRoutes);
