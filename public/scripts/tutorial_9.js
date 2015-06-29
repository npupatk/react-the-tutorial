//tutorial_9.js
var data = [
  {author: "Pete Hunt", text: "This is Peter's first comment."},
  {author: "Jordan Walke", text: "This is Jordan speaking."}
];


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
        <CommentList data={this.props.data}/>
        <CommentForm />
      </div>
    );
  }
});
React.render(
  <CommentBox data={data}/>,
  document.getElementById('content')
);
