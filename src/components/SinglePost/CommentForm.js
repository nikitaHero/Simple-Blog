import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createComment } from "../../actions/postActions";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      postId: 0
    };
    console.log(this.props.PostId);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit() {
    // e.preventDefault();

    const comment = {
      body: this.state.body,
      postId: this.props.PostId
    };
    if (this.state.body === "") {
      console.log("Empty field");
    } else {
      this.props.createComment(comment);
      this.setState({ body: "" });
    }
  }

  render() {
    return (
      <div className="mt-3">
        <h3 className="text-center ">Add new comment</h3>
        <form className="form-group text-center" onSubmit={this.onSubmit}>
          <div className="text-center">
            <label className="form-label">Your comment: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button className="btn btn-primary mx-auto" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

CommentForm.propTypes = {
  createComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { createComment }
)(CommentForm);
