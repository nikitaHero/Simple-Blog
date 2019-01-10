import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts, fetchComments } from "../../actions/postActions";
import { Link } from "react-router-dom";

import CommentForm from "./CommentForm";

class Post extends Component {
  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchComments();
  }

  componentDidMount = () => {
    // console.log(this.props.match.params.id);
  };

  render() {
    let PostId = parseInt(this.props.match.params.id);

    const SinglePost = this.props.posts.filter(post => post.id === PostId);

    const SinglePostComments = this.props.comments.filter(
      comment => comment.postId === PostId
    );

    const SinglePostItems = SinglePost.map(post => (
      <div
        key={post.id}
        className="card-body container text-white bg-primary mt-3"
      >
        <h3 className="card-title">{post.title}</h3>
        <p className="card-text">{post.body}</p>
        <Link className="btn btn-light" to="/">
          Go back{" "}
        </Link>
      </div>
    ));

    const Comments = SinglePostComments.map(comment => (
      <div className="container" key={comment.id}>
        <div className="container card-body text-white bg-primary mt-3">
          <p className="card-text">{comment.body}</p>
        </div>
      </div>
    ));

    return (
      <div>
        {SinglePostItems}
        <h3 className="text-center mt-3"> Comments:</h3>
        {Comments}
        <CommentForm PostId={PostId} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  comments: state.comments.comments
});

export default connect(
  mapStateToProps,
  { fetchPosts, fetchComments }
)(Post);
