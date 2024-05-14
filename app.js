const fs = require('fs');
const index = fs.readFileSync('index.html', 'utf-8');          
const data = JSON.parse(fs.readFileSync('data.json'));  
const products = data.products; 
const express = require('express');

const server = express(); 
// middle ware 
server.use((req, res, next) =>{
   console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'));
   next();

})

const auth = (req, res, next) =>{   // to test url?password=124
  console.log(req.query);
  if(req.query.password=='123'){
    next();
  }
  else 
    res.sendStatus(401);
}
// server.use(auth);

// API - Endpoint - Route
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

