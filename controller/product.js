const fs = require('fs');
const model = require('../model/product');
const Product = model.Product;

exports.createProduct = async (req, res)=>{
    const product = new Product(req.body);
    await product.save();
    res.status(201).json(product);
  };

exports.getAllProducts = (req, res)=>{
    res.json(products);
  };

exports.getProduct = (req, res) =>{
    const id =  +(req.params.id);
    const product = products.find(p=> p.id === id);
     res.json(product);
   };

exports.replaceProduct = (req, res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=> p.id == id);
    products.splice(productIndex, 1, {...req.body, id:id});
    res.status(200).json({product : 'updated'});
  };

exports.updateProduct = (req, res)=>{
    const id = +req.params.id;
    const productIndex = products.findIndex(p=> p.id == id);
    const product = products[productIndex];
    products.splice(productIndex, 1, {...product,...req.body, id:id});
    res.status(200).json({product : 'updated'});
  };

exports.deleteProduct = (req, res)=>{
    const id =  +req.params.id;
    const productIndex = products.findIndex(p=> p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1);
    res.status(200).json(product);
  };
