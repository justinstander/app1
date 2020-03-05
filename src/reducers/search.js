import { combineReducers } from "redux";

import {
  SEARCH_COMPLETE,
  CLEAR
} from "../actions/search";

const searchResults = (state = null, action) => {
  switch(action.type) {
    case SEARCH_COMPLETE:
      return action.searchResults;
    case CLEAR:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  searchResults
});
