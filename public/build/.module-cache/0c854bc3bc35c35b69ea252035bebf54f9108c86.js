//tutorial_1.js
var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {className: "commentBox"}, 
      "Hello, world! I am a CommentBox."
      )
      );
  }
});
