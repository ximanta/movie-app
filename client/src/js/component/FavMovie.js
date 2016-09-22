var React = require('react');
var FavDisplay = require('./FavDisplay');

var FavMovie = React.createClass({
  getInitialState:function(){
    return {data:[],url:"http://localhost:8080/movie/getDetails"}
  },
  deleteMovie:function(deleteUrl){
    $.ajax({
      url:deleteUrl,
      method:'DELETE',
      dataType: 'json',
      cache: false,
      success: function(data1) {
        this.setState({data: data1});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },
  updateMovie:function(dataObj){
    $.ajax({
      url:'http://localhost:8080/movie/update',
      method:'PUT',
      data:dataObj,
      dataType: 'json',
      cache: false,
      success: function(data1) {
        this.setState({data: data1});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },
  componentDidMount:function(){
    $.ajax({
      url: this.state.url,
      method:'GET',
      dataType: 'json',
      cache: false,
      success: function(data1) {
        this.setState({data: data1});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },
  render:function(){
    return (
      <div>
      <FavDisplay data={this.state.data} delete={this.deleteMovie} update={this.updateMovie}/>

      </div>
    )
  }
});
module.exports=FavMovie;
