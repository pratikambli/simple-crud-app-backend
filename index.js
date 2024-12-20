const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//routes
app.use('/api/products',productRoute);

app.get('/',(req,res)=>{
    res.send('hello from node api server');
});

// app.get('/api/products',async(req,res)=>{
//   try{
//     const Products = await Product.find({});
//     res.status(200).json(Products);
//   }
//   catch(err){
//     res.status(500).json({message:err.message});
//   }
// });

// app.get('/api/products/:id',async(req,res)=>{
//   try{
//     const {id} = req.params;
//     const Products = await Product.findById(id);
//     res.status(200).json(Products);
//   }
//   catch(err){
//     res.status(500).json({message:err.message});
//   }
// });

// app.post('/api/products',async(req,res)=>{
//   try{
//     const Prod = await Product.create(req.body);
//     res.status(200).json(Prod);
//   }
//   catch(err){
//     res.status(500).json({message:err.message});
//   }
// });

// app.put('/api/products/:id',async(req,res)=>{
//   try {
//     const {id} = req.params;
//     const Prod = await Product.findByIdAndUpdate(id,req.body);
//     if(!Prod){
//       res.status(404).json('Product not found');
//     }
//     const updatedProduct = await Product.findById(id);
//     res.status(200).json(updatedProduct);
//   } catch (error) {
//     res.status(500).json({message:err.message});
//   }
// });

//   app.delete('/api/products/:id',async(req,res)=>{
//     try {
//       const {id} = req.params;
//       const prod = await Product.findByIdAndDelete(id);
//       if(!prod){
//         res.status(404).json('Product not found');
//       }
//       res.status(200).json('Deleted Successfully');
//     } catch (error) {
//       res.status(500).json({message:err.message});
//     }
//   })


// const DBUrl = "mongodb+srv://pratibhaek26:prati%401993@backenddb.kxpe9.mongodb.net/Node-API?retryWrites=true&w=majority";
// mongoose.connect(DBUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect("mongodb+srv://pratibhaek26:prati%401993@backenddb.kxpe9.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() =>{
  console.log('Connected to the database!');
  app.listen(3000,()=>{
    console.log('service is running on port 3000');
});
})
.catch((e) =>{
  console.log('connection failed!')
;});