var React = require('react');

var Modal = React.createClass({
  getInitialState:function(){
    return ({movieObj:this.props.data});
  },
  closeIt:function(){
    this.props.closeIt();
  },
  updateMovie:function(){
    this.props.update(this.state.movieObj);
    this.props.closeIt();
  },
  handleTitleChange:function(e){
    this.state.movieObj.Title = e.target.value;
    //this.setState({movieObj:movieObj});
  },
  handleTypeChange:function(e){
    this.state.movieObj.Type = e.target.value;
    //this.setState({movieObj.Type: e.target.value});
  },
  handleYearChange:function(e){
    this.state.movieObj.Year = e.target.value;
  //  this.setState({movieObj.Year: e.target.value});
  },

  render:function(){
    return (
      <div>
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog">


          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">&times;</button>
              <h4 className="modal-title">Modal Header</h4>
            </div>
            <div className="modal-body">
                  <p><label for="title">Title :</label>
                  <input id="title"  type="text" placeholder={this.props.data.Title}  onChange={this.handleTitleChange}/></p>
                  <p><label for="type">Type :</label>
                  <input id="type"  type="text" placeholder={this.props.data.Type}  onChange={this.handleTypeChange}/></p>
                  <p><label for="year">Year :</label>
                  <input id="year"  type="text" placeholder={this.props.data.Year}  onChange={this.handleYearChange}/></p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.updateMovie}>Save Changes</button>
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.closeIt}>Close</button>
            </div>
      </div>
  </div>
</div>

      </div>
    )
  }
});
module.exports=Modal;
