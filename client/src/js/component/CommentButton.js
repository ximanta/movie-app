var React = require('react');

var CommentButton = React.createClass({
  getInitialState:function(){
    return {author:''};
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  sendDataToParent: function() {
    this.props.changeValue(this.state.author);
  },
  render:function(){
    return(
      <div className="jumbotron">
      <h2 id="heading">"IMDB Movie Search Online"</h2>
      <input id="textbox" type="text" placeholder="Search your movie here..." value={this.state.author} onChange={this.handleAuthorChange}/>
      <input type="button" onClick={this.sendDataToParent} value='Click Me' id='searchButton'/>
      </div>
    )
  }
});

module.exports=CommentButton;
