var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var movies = require('../model/movie');

var myLogger = function (req, res, next) {
  var movie = mongoose.model("movies");

   movie.find({}, function(err, data){
     if(err){
     }else{
       res.send(data);
     }
   });
 };


router.post('/fav',function(req,res){
  console.log(req.body);

  var movie = new movies();
  movie.Title = req.body.Title;
  movie.Type  = req.body.Type;
  movie.Year = req.body.Year;
  movie.Poster = req.body.Poster;
  movie.imdbID = req.body.imdbID;

  movie.save(function(err){
    if(err){
      res.send(err);
    }
    else{
      res.send('movie added');
    }
  })
 });
 router.get('/getDetails',function(req,res){

   var movie = mongoose.model("movies");

    movie.find({}, function(err, data){
      if(err){
      }else{
        res.send(data);
      }
    });
  });
  router.delete('/delete',function(req,res,next){
    var movie = mongoose.model("movies");

    movie.remove({ imdbID: req.query.id }, function (err) {
     if (err) return handleError(err);
      else{
        next();
      }
      });
  });
  router.put('/update',function(req,res,next){
    var movie = mongoose.model("movies");

     var query = { imdbID: req.body.imdbID };
     var json = req.body;
     console.log(json);
     movie.update(query,json , function (err) {
      if (err) return handleError(err);
       else{
         next();
       }
     });
  });

router.use(myLogger);
module.exports = router;
