var React = require('react');
var ReactDOM = require('react-dom');
var {browserHistory,hashHistory, Route, Router, IndexRoute} = require('react-router');
var Moviebox = require('./component/Moviebox');
var Navbar = require('./component/Navbar');
var About = require('./component/About');
var Home = require('./component/Home');
var Login = require('./component/Login');
var FavMovie = require('./component/FavMovie');

var RouterBox = React.createClass({
  render: function(){
    return (
      <div>
      <Navbar/>
      {this.props.children}

      </div>
    )
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
  <Route path="/" component={RouterBox}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Login}/>
      <Route path="/about/:value" component={About}/>
      <Route path="/getDetails" component={FavMovie}/>
      <Route path="/moviebox" component={Moviebox}/>
  </Route>
  </Router>,document.getElementById('app'));
