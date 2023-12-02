import "dotenv/config";
import express from "express";
import { PORT, uri } from "./config.js";
import mongoose from "mongoose";
import flipkartRoutes from "./routes/flipkartRoutes.js";
import cors from "cors";

const app = express();

app.use(express.json());

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
//this is to connect n use our routes from flipkartRoutes
// Allow requests only from http://localhost:5173
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your specific origin
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

//routes should always define below cors
app.use("/products", flipkartRoutes);

mongoose
  .connect(uri)
  .then(() => {
    console.log("App is connected to the database.");

    app.listen(PORT, () => {
      console.log(`Sever is connected to the ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
