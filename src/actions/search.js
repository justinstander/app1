export const CLEAR = "CLEAR";
export const SEARCHING = "SEARCHING";
export const SEARCH_COMPLETE = "SEARCH_COMPLETE";

export const clear = () => ({ type: CLEAR });
export const searching = () => ({ type: SEARCHING });
export const searchComplete = (searchResults) => ({
  type: SEARCH_COMPLETE,
  searchResults
});
