import { combineReducers } from "redux";

import error from "./error";
import about from "./about";
import search from "./search";

/**
 * root
 */
export default combineReducers({
  error,
  about,
  search
});