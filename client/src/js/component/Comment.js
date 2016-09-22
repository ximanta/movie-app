var React = require('react');

var Comment = React.createClass({

  getInitialState: function(){
    return {url:'http://localhost:8080/movie/fav'}
  },
  sendDataToServer:function(){
    $.ajax({
      url:this.state.url ,
      method:'POST',
      dataType: 'json',
      data:this.props.movie,
      cache: false,
      success: function(data1) {
        alert("added successfully ");
        console.log(data1);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },
  render:function(){
    return (
      <div className = 'row' id="poster">
        <div className = 'col-sm-6'>
          <img src={this.props.movie.Poster} ></img>
        </div>
        <div className = 'col-sm-6'>
          <h4 className="title">
              {this.props.movie.Title}
          </h4>
          <ul className="title">
          <li>Year :{this.props.movie.Year}</li>
          <li>Type :{this.props.movie.Type}</li>
          </ul>
          <input id ="fav" type = "button" value="Add to favourite" onClick={this.sendDataToServer}></input>
        </div>
      </div>
    );
  }

});
module.exports=Comment;
