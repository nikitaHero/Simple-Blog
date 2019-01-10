import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../../actions/postActions";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      author: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    // e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      public_date: new Date()
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form className="form-group " onSubmit={this.onSubmit}>
          <div className="col-3 mx-auto">
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <div className="col-3 mx-auto">
            <label>Author: </label>
            <br />

            <input
              type="text"
              name="author"
              onChange={this.onChange}
              value={this.state.author}
            />
          </div>
          <div className="col-3 mx-auto">
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <button className="col-3 btn btn-primary mx-auto" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { createPost }
)(PostForm);
