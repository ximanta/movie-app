var express = require('express');
var app = express.Router();
var users = require('../model/user');

/* GET users listing. */


app.post('/userinsert/:userid/:password',function(req,res){
  var user = new users();
  user.username = req.params.userid;
  user.password = req.params.password;
  user.save(function(err){
    if(err){
      res.send(err);
    }
    else{
      res.send('user created');
    }
  })
});
module.exports = app;
