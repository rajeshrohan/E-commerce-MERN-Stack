import http from 'http';
import fs from 'fs';

const index = fs.readFileSync('index.html', 'utf-8');          
const data = JSON.parse(fs.readFileSync('data.json'));  
const products = data.products; 

// above lines are outside server, so runs only one time.

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if(req.url.startsWith('/product')){
    const id = req.url.split('/')[2];
    const product = products.find(p => p.id === (+id));

    res.setHeader('content-type', 'text/html');
      let modifiedIndex = index.replace('**title**', product.title).
      replace('**price**', product.price).
      replace('**rating**', product.rating).
      replace('**url**',product.thumbnail);
      
      res.end(modifiedIndex);
      return;
  }

  switch(req.url){
    case '/': 
      res.setHeader("content-type", "text/html");
      res.end(index);
      break;
    case '/api' : 
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify(data)); 
      break;
    default:
      res.writeHead(400);
      res.end();
  }
  console.log("server started");
});
server.listen(8080);