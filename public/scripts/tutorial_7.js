//tutorial_7.js
var Comment = React.createClass({
  render: function(){
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
          <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function(){
    return (
      <div className="commentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is ANOTHER comment</Comment>
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
