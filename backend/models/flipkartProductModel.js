import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    itemName: String,
    mRPRate: Number,
    discountedRate: Number,
    productCategory: String,
},
{
    //using timestamp for getting when book is created or updated
timestamps : true,
}
);

export const Product = mongoose.model("Product", productSchema);