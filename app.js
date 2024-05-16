const express = require('express');
const morgan = require('morgan');
const server = express(); 
const productController = require('./controller/product');
const productRouter = express.Router(); 

// body parser
server.use(express.json()); 
server.use(morgan('dev'));
server.use(express.static('public')); 

// MVC model view controller
server
.post('/products', productController.createProduct)
.get('/products', productController.getAllProducts)
.get('/products/:id', productController.getProduct)
.put('/products/:id', productController.replaceProduct)
.patch('/products/:id', productController.updateProduct)
.delete('/products/:id', productController.deleteProduct);

server.listen(8080, ()=>{   
  console.log('server running on port 8080');
});