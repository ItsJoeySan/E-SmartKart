import 'dotenv/config';
import express from "express";
import {PORT, uri} from "./config.js";
import mongoose from "mongoose";
import flipkartRoutes from "./routes/flipkartRoutes.js";

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res) => {

    res.send("Hello Joey San");
});

mongoose.connect(uri).then(() => { 
    console.log("App is connected to the database.");

    app.listen(PORT, ()=>{
        console.log(`Sever is connected to the ${PORT}`)
    });

}).catch((error)=>{
    console.log(error);
});

app.use("/items", flipkartRoutes);
