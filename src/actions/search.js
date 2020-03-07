export const CLEAR = "clear";

export const SEARCHING = "searching";
export const SEARCH_COMPLETE = "searchComplete";

export const searching = () => ({ type: SEARCHING });
export const searchComplete = (searchResults) => ({ type: SEARCH_COMPLETE, searchResults });

export const clear = () => ({ type: CLEAR });
