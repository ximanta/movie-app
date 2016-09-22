var React = require('react');

var Login = React.createClass({
  render: function(){
    return (
      <div>
       <h2>Login page</h2>
       <p><label for="title">UserName :</label>
       <input id="title"  type="text" placeholder="Enter your username"/></p>
       <p><label for="type">Password :</label>
       <input id="type"  type="Password" placeholder="Enter your password"/></p>

      </div>
    )
  }
});
module.exports=Login
