const Product = require('../models/product.model');

//get all products
const getProducts = async(req,res) =>{
    try{
        const Products = await Product.find({});
        res.status(200).json(Products);
      }
      catch(error){
        res.status(500).json({message:error.message});
      }
}

//get single product
const getProduct = async(req,res)=>{
  try{
    const {id} = req.params;
    const Products = await Product.findById(id);
    res.status(200).json(Products);
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
}

//create products
const createProduct = async(req,res)=>{
  try{
    const Prod = await Product.create(req.body);
    res.status(200).json(Prod);
  }
  catch(error){
    res.status(500).json({message:error.message});
  }
}

//update products
const updateProduct = async(req,res)=>{
  try {
    const {id} = req.params;
    const Prod = await Product.findByIdAndUpdate(id,req.body);
    if(!Prod){
      res.status(404).json('Product not found');
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

//delete product
const deleteProduct = async(req,res) => {
  try {
    const {id} = req.params;
    const prod = await Product.findByIdAndDelete(id);
    if(!prod){
      res.status(404).json('Product not found');
    }
    res.status(200).json('Deleted Successfully');
  } catch (error) {
    res.status(500).json({message:error.message});
  }
}

module.exports ={
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}