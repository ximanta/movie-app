var express = require('express');
var app = express.Router();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

app.use(myLogger);

app.get('/add',function(req,res){

  var n1 = parseInt(req.query.num1);
  var n2 = parseInt(req.query.num2);
  var sum = n1+n2;
  var res = {
    total:sum
  }

  res.send(res);
});
app.get('/test',function(req,res){
  console.log("testing done");
  var total = 10;
res.send("check :"+total);
});
module.exports = app;
