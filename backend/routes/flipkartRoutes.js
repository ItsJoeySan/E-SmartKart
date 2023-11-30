import express from "express";
import {Product} from "../models/flipkartProductModel.js";
import { Book } from "../../../libraryApp/libraryReact/models/bookModel.js";
const router = express.Router()

//find all products
router.get("/api/products", async (req, res) => {
    try{
        const allProducts = await Product.find({});

        return res.status(200).send({
            count: allProducts.length,
            data: allProducts,
        });
    }catch{
        console.log("Error while Searching", error.message);
        res.status(500).send({message: error.message});
    }
}); 

// find a product
router.get("/api/products/:id", async (req, res) => {
    const {id} = req.params;
    try{
        const foundProduct = await Product.findById(id);

        if(!foundProduct){
            return res.status(404).json({message: "Product not found."})
        }
        return res.status(200).send(foundProduct);
    }catch(error){
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});


//upload 1 product
router.post("/api/products/upload", async (req, res) => {
    
    try {
        const newProduct = new Product({
            name: req.body.name,
            price : {
                mrpPrice : req.body.mrpPrice,
                currentPrice : req.body.currentPrice,
            },
            imageLink:req.body.imageLink,
            productCategory: req.body.productCategory,
        });

        const product = await newProduct.save();

        return res.status(201).send({message: "Product uploaded successfully",
        data: newProduct});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message: error.message})
    }
});

// upload many products
router.post("/api/products/uploadMany", async (req, res) => {
    try{
        const products = req.body;
        const insertProducts = await Product.insertMany(products);
        return res.status(201).send({message:"Products uploaded successfully."});
    }catch(error){
        console.log(error.message);
        return res.status(500).send({message: error.message});
    }
});


//update a product
router.put("/api/products/:id", async (req, res) => {
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, req.body);

        if(!updateProduct){
            return res.status(404).json({message: "Product not found."});
        }
        return res.status(201).send({message:"Product updated successfully",
        data: updateProduct});
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});

// delete a product
router.delete("/api/products/:id", async (req, res) => {
    try{
        const deleteProduct = await Product.findByIdAndDelete(id);
        if(!deleteProduct){
            return res.status(404).json({message:"Product not found."});
        }
        return res.status(201).send("Product Deleted Successfully.");
    } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
    }
});


export default router;


