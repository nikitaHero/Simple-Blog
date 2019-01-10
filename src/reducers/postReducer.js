import {
  FETCH_POSTS,
  NEW_POST,
  FETCH_COMMENTS,
  NEW_COMMENT
} from "../actions/types";

const initialState = {
  items: [],
  comments: [],
  new_comment: {},
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case NEW_COMMENT:
      return {
        ...state,
        new_comment: action.payload
      };
    default:
      return state;
  }
}
