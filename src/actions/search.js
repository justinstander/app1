export const SEARCH_COMPLETE = "searchComplete";
export const CLEAR = "clear";

export const searchComplete = (searchResults) => ({ type: SEARCH_COMPLETE, searchResults });

export const clear = () => ({ type: CLEAR });
