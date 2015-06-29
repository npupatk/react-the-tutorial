//tutorial_4.js
var Comment = React.createClass({
  render: function(){
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          {this.props.children}
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="commentList">
        I am a CommentList.
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function(){
    return (
      <div className="commentForm">
        I am a CommentForm.
      </div>
    );
  }

});

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList />
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
