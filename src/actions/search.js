export const SEARCH_COMPLETE = "searchComplete";
export const CLEAR = "clear";

export const searchComplete = (searchResults) => {
	return { type: SEARCH_COMPLETE, searchResults };
};

export const clear = () => {
	return { type: CLEAR };
};
