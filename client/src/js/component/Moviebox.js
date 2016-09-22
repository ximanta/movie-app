var React = require('react');
var CommentList = require('./CommentList');
var CommentForm = require('./CommentForm');
var CommentButton = require('./CommentButton');


var Moviebox = React.createClass({
  getInitialState:function(){
    return {data:[], url:"http://omdbapi.com/?s="};
  },
  changeValue:function(value){
    $.ajax({
      url: this.state.url + value,
      method:'GET',
      dataType: 'json',
      cache: false,
      success: function(data1) {
        console.log("value from server");
        console.log(data1);
        this.setState({data: data1.Search});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.state.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function(){
    return (
      <div>
      <CommentButton changeValue={this.changeValue}/>
      <CommentList data={this.state.data} />

      </div>
    )
  }
});
module.exports=Moviebox
