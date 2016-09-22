var React = require('react');
var Modal = require('./Modal');

var Display = React.createClass({

  getInitialState: function(){
    return {url:'http://localhost:8080/movie/delete?id=',status:false}
  },
  handleStatus:function(){
   this.setState({status:true});
  },
  closeIt:function(){
    this.setState({status:false});
  },
  deleteMovie:function(){
    this.props.delete(this.state.url+this.props.movie.imdbID);
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
          </div>
          <p >
          <button id="fav" type="button" class="btn btn-primary" onClick={this.deleteMovie}>Delete</button>
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" onClick={this.handleStatus}>Update</button>
          {this.state.status?<Modal data={this.props.movie} closeIt={this.closeIt} update={this.props.update}/>:null}
          </p>
      </div>
    );
  }

});
module.exports=Display;
