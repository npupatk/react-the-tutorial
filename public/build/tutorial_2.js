//tutorial_2.js
var CommentList = React.createClass({displayName: "CommentList",
  render: function(){
    return (
      React.createElement("div", {className: "commentList"}, 
        "I am a CommentList."
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function(){
    return (
      React.createElement("div", {className: "commentForm"}, 
        "I am a CommentForm."
      )
    );
  }

});

var CommentBox = React.createClass({displayName: "CommentBox",
  render: function(){
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, null), 
        React.createElement(CommentForm, null)
      )
    );
  }
});
React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
