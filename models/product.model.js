const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter the name"]
        },
        quantity:{
            type:Number,
            required:[true,"Please enter the quantity"],
            default:0
        },
        price:{
            type:Number,
            required:[true,"Please enter the price"],
            default:0
        },
        image:{
            type:String,
            required:false
        }

    },
    {
        Timestamps:true
    }
);

const Product = mongoose.model("Product",ProductSchema);
module.exports=Product;