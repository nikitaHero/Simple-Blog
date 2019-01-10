import { FETCH_POSTS, NEW_POST, FETCH_COMMENTS, NEW_COMMENT } from "./types";

export const fetchPosts = () => dispatch => {
  fetch("http://localhost:3001/posts")
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      })
    );
};

export const fetchComments = () => dispatch => {
  fetch("http://localhost:3001/comments")
    .then(res => res.json())
    .then(comments =>
      dispatch({
        type: FETCH_COMMENTS,
        payload: comments
      })
    );
};

export const createPost = postData => dispatch => {
  fetch("http://localhost:3001/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_POST,
        payload: post
      })
    );
};

export const createComment = commentData => dispatch => {
  fetch("http://localhost:3001/comments", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(commentData)
  })
    .then(res => res.json())
    .then(new_comment =>
      dispatch({
        type: NEW_COMMENT,
        payload: new_comment
      })
    );
};
