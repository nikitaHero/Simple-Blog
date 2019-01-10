import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../../actions/postActions";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import PostForm from "./Postform";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }
  render() {
    const postItems = this.props.posts.reverse().map(post => (
      <div key={post.id} className="card text-white bg-primary mb-3">
        <div className="card-header">
          <div>Author : {post.author}</div>
          <div>
            Publication date:
            <Moment format="YYYY-MM-DD HH:mm">{post.public_date}</Moment>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{post.title}</h4>
          <p className="card-text"> {post.body} </p>
          <Link to={`post/${post.id}`} className="btn btn-secondary">
            Viev post
          </Link>
        </div>
      </div>
    ));
    return (
      <Fragment>
        <div className=" navbar-dark bg-primary">
          <h1 className=" display-2 my-2 navbar-brand d-block text-center">
            My Simple Blog
          </h1>
        </div>
        <div className="container text-center">
          <PostForm />
          <h2 className="container display-4">Latest Posts</h2>
          {postItems}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items,
  newPost: state.posts.item
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
