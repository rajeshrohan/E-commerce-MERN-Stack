const express = require('express'); 
const productController = require('../controller/product');
const router = express.Router();

router
.post('/', productController.createProduct)
.get('/', productController.getAllProducts)
.get('/:id', productController.getProduct)
.put('/:id', productController.replaceProduct)
.patch('/:id', productController.updateProduct)
.delete('/:id', productController.deleteProduct);

exports.router = router;

// product controller are callback functions 
// router are have http methods define 
// while using with server, we can provide thise routes to a specific path
