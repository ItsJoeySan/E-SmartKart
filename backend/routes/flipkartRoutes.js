import express from "express";
import {Product} from "../models/flipkartProductModel.js";
import { Book } from "../../../libraryApp/libraryReact/models/bookModel.js";
const router = express.Router()

//find all products
router.get("/api/products", async (req, res) => {
    try{
        return res.status(200).send(await Product.find({}));
    }catch{
        console.log("Error while Searching", error.message);
        res.status(500).send({message: error.message});
    }
}); 

router.get("api/products/:id", async (req, res) => {
    const {id} = req.params;
    try{
        const product = await Product.findById(id);
        res.status(200).send(product);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});


//upload 1 product
router.post("/api/products/upload", async (req, res) => {
    const newProduct = new Product({
        itemName: req.body.itemName,
        mRPRate: req.body.mRPRate,
        discountedRate: req.body.discountedRate,
        productCategory: req.body.productCategory,
    });
    
    try {
        const product = await newProduct.save();
        return res.status(201).send(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

router.post("/api/products/uploadMany", async (req, res) => {
    const products = req.body;
    try{
        const insertProducts = await Book.insertMany(products);
        return res.status(201).send(insertBook);
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});


export default router;


