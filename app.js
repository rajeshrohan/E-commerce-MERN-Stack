require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const server = express(); 
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')

//console.log(process.env.DB_PASSWORD);

// middleware 
server.use(express.json());  // body parser
server.use(morgan('dev'));  // logger 
server.use(express.static('public'));  // hoisting

// Route handlers 
server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(process.env.PORT, ()=>{   
  console.log('server running on port 8080');
});