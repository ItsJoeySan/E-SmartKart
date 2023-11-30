import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        mrpPrice:{
            type: Number,
            required: true,
        },
        currentPrice: {
            type:Number,
            required: true
        }
    },
    imageLink: {
        type: [],
        required: true,
    },
    productCategory: {
        type: String,
        required: true,
    }
},
{
    //using timestamp for getting when book is created or updated
timestamps : true,
}
);

export const Product = mongoose.model("Product", productSchema);