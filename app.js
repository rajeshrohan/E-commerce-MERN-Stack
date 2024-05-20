require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose  = require('mongoose');

const server = express(); 
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');

// db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
// mongodb://user:password@127.0.0.1:27017/test');`if auth enabled
}

// middleware 
server.use(express.json()); 
server.use(morgan('dev'));  
server.use(express.static('public'));  

// Route handlers 
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(process.env.PORT, ()=>{   
  console.log('server running on port 8080');
});