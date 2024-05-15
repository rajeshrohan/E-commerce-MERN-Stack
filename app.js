const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const server = express(); // instance of express server

const data = JSON.parse(fs.readFileSync('data.json'));  // json
const products = data.products;                 // products array

server.use(express.json()); // mw body parser
// server.use(morgan('dev'));  // mw for logs
server.use(express.static('public')); // mw static hoisting

// API - Endpoint - Route

// Create POST/products
server.post('/products', (req, res)=>{
  products.push(req.body);
  res.status(201).json(req.body);
});
// Read GET /products
server.get('/products', (req, res)=>{
  res.json(products);
})
// Read GET /products/:id
server.get('/products/:id', (req, res) =>{
 const id =  +(req.params.id);
 const product = products.find(p=> p.id === id);
  res.json(product);
});
// Update PUT /products/:id
server.put('/products/:id', (req, res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p=> p.id == id);
  products.splice(productIndex, 1, {...req.body, id:id});
  res.status(200).json({product : 'updated'});
})
// Upate PATCH /products/:id
server.patch('/products/:id', (req, res)=>{
  const id = +req.params.id;
  const productIndex = products.findIndex(p=> p.id == id);
  const product = products[productIndex];
  products.splice(productIndex, 1, {...product,...req.body, id:id});
  res.status(200).json({product : 'updated'});
})
// Delete DELETE /products/:id
server.delete('/products/:id', (req, res)=>{
  const id =  +req.params.id;
  const productIndex = products.findIndex(p=> p.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1);
  res.status(204).json(product);
})

server.listen(8080, ()=>{   
  console.log('server running on port 8080');
});