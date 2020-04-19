import { combineReducers } from "redux";

import Main from "./Main";
import Search from "./Search";

export default combineReducers({
  main: Main,
  search: Search
});