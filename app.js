const express = require('express');
const morgan = require('morgan');
const server = express(); 
const productRouter = require('./routes/product');
const userRouter = require('./routes/user')

// body parser
server.use(express.json()); 
server.use(morgan('dev'));
server.use(express.static('public')); 

server.use('/products', productRouter.router);
server.use('/users', userRouter.router);

server.listen(8080, ()=>{   
  console.log('server running on port 8080');
});

// while using any route, we can give a prefix url or base url to that 