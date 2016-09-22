var React = require('react');

var About = React.createClass({
  render: function(){
    return (
      <div>
      <h3>About {this.props.params.value}</h3>
      <p>React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags. React promises programmers a model in which subcomponents cannot directly affect enclosing components ("data flows down"); efficient updating of the HTML document when data changes; and a clean separation between components on a modern single-page application.

It is maintained by Facebook, Instagram and a community of individual developers and corporations. According to JavaScript analytics service Libscore, React is currently being used on the websites of Netflix, Imgur, Bleacher Report, Feedly, Airbnb, SeatGeek, HelloSign, and others.
 </p>
      </div>
    )
  }
});
module.exports=About
