var React = require("react");
var NavLink = require("./NavLink");


var Navbar = React.createClass({
render:function(){
  return(
    <div className ="navbar">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#"><strong>IMDB</strong></a>
          </div>
          <ul className="nav navbar-nav">
            <li><NavLink to="/home">Login</NavLink></li>
            <li><NavLink to="/about/react">About React</NavLink></li>
            <li><NavLink to="/getDetails">Favourite Movies</NavLink></li>
            <li><NavLink to="/moviebox">Search Movie</NavLink></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

});
module.exports=Navbar;
