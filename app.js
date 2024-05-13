import http from "http";
import fs from 'fs';

const index = fs.readFileSync('index.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const product = data.products[0];


const server = http.createServer((req, res) => {
  console.log(req.url);
  switch(req.url){
    case '/': 
      res.setHeader("content-type", "text/html");
      res.end(index);
      break;
    case '/api' : 
      res.setHeader('content-type', 'application/json');
      res.end(JSON.stringify(data));
      break;
    case '/product' :
      res.setHeader('content-type', 'text/html');
      let modifiedIndex = index.replace('**title**', product.titile);
      res.end(modifiedIndex);
      break;

    default:
      res.writeHead(400);
      res.end();
  }
  console.log("server started");
});
server.listen(8080);


