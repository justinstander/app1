/**
 * [CLEAR description]
 * @type {String}
 */
export const CLEAR = "CLEAR";

/**
 * [SEARCHING description]
 * @type {String}
 */
export const SEARCHING = "SEARCHING";

/**
 * [SEARCH_COMPLETE description]
 * @type {String}
 */
export const SEARCH_COMPLETE = "SEARCH_COMPLETE";

/**
 * [description]
 * @return {[type]} [description]
 */
export const clear = () => ({ type: CLEAR });

/**
 * [description]
 * @return {[type]} [description]
 */
export const searching = () => ({ type: SEARCHING });

/**
 * [description]
 * @param  {[type]} searchResults [description]
 * @return {[type]}               [description]
 */
export const searchComplete = (searchResults) => ({
  type: SEARCH_COMPLETE,
  searchResults
});
