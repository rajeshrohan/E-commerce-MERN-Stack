const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json'));
const users = data.users;  

exports.createUser = (req, res)=>{
    users.push(req.body);
    res.status(201).json(req.body);
  };

exports.getAllUser = (req, res)=>{
    res.json(users);
  };

exports.getUser = (req, res) =>{
    const id =  +(req.params.id);
    const user = users.find(p=> p.id === id);
     res.json(user);
   };

exports.replaceUser = (req, res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=> p.id == id);
    users.splice(userIndex, 1, {...req.body, id:id});
    res.status(200).json({user : 'updated'});
  };

exports.updateUser = (req, res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=> p.id == id);
    const user = users[userIndex];
    users.splice(userIndex, 1, {...user,...req.body, id:id});
    res.status(200).json({user : 'updated'});
  };

exports.deleteUser = (req, res)=>{
    const id =  +req.params.id;
    const userIndex = users.findIndex(p=> p.id === id);
    const user = users[userIndex];
    users.splice(userIndex, 1);
    res.status(200).json(user);
  };
