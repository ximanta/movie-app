var React = require('react');
var Display = require('./Display');

var FavDisplay = React.createClass({
render:function(){
  var that=this;
  var commentNodes=this.props.data.map(function(movieObj){

    return (
      <div className="col-sm-6">
      <Display key={movieObj.imdbID} movie={movieObj} delete={that.props.delete} update={that.props.update}>
      </Display>
      </div>
    );
  });


  return(
    <div className ='row'>
      {commentNodes}
    </div>
  );
}

});
module.exports=FavDisplay;
