const express = require('express');
const morgan = require('morgan');
const server = express(); 

server.use(express.json());
server.use(morgan('dev'));
server.use(express.static('public'));

const auth = (req, res, next) =>{   
  console.log(req.body);      
  if(req.body.password == '123'){ 
    next();
  }
  else{
    res.sendStatus(401);
  } 
}

// API - Endpoint - Route


// http://localhost:8080/product/5
server.get('/product/:id', (req, res)=>{
  console.log(req.params);
  res.json({type:'GET PRODUCT'});
})

server.get('/', auth, (req, res)=>{
  res.json({type:'GET'});
})
server.post('/', auth, (req, res)=>{
  res.json({type:'POST'});
})
server.put('/', (req, res)=>{
  res.json({type:'PUT'});
})
server.delete('/', (req, res)=>{
  res.json({type:'DELETE'});
})
server.patch('/', (req, res)=>{
  res.json({type:'PATCH'});
})
server.get('/', (req, res)=>{
  res.send('Hello');
  res.status(201).send('hello with status given');
  res.sendFile('F:\\Learn\\node\\data.json');
  res.json(products);
  res.sendStatus(404);
})

server.listen(8080, ()=>{   
  console.log('server running on port 8080');
});