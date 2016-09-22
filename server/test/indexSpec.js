var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .get("/index")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          //expect(res.text).to.be.equal("Hello!");
          res.text.should.be.equal("Hello chanda");
          //assert(res.text == "Hello!","Test has failed");
          done();
        });
  });
});

describe("Testing the second route", function(err){
  it("should handle and send the computed info", function(done){
    url
        .get("/product/5/6")
        .expect(200)
        .end(function(err,res){
          should.not.exist(err);
          parseFloat(res.text).should.be.equal(30);
          done();
        });

  });
});

describe("Testing the third route", function(err){
  it("should handle the JSON data", function(done){
    url
        .get("/movie/getDetails")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj[0].Title.should.be.equal("Harry Potter and the Deathly Hallows: Part 2");
          done();
        });

  });
  it("should send the JSON data", function(done){
    url
        .post("/movie/fav")
        .expect(200)
        .send({
          	"Title":"bang bang",
          	"Year":"2009",
          	"Type":"movie",
          	"Poster":"jdskhliuh",
          	"imdbID":"142"
            })
        .end(function(err,res,body){
          should.not.exist(err);
          res.text.should.be.equal("movie added");
          done();
        });

  });

  it("should update and handle the JSON data", function(done){
    url
        .put("/movie/update")
        .expect(200)
        .expect('Content-Type', /json/)
        .send({
          	"Title":"bang bang part 2",
          	"Year":"2009",
          	"Type":"movie",
          	"Poster":"jdskhliuh",
          	"imdbID":"142"
            })
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          var length = myObj.length - 1;
          myObj[length].Title.should.be.equal("bang bang part 2");
          done();
        });

  });


  it("should delete and handle the JSON data", function(done){
    url
        .delete("/movie/delete?id=142")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
          myObj[0].Title.should.be.equal("Harry Potter and the Deathly Hallows: Part 2");
          done();
        });

  });


});
