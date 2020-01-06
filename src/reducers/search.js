import {
	SEARCH_COMPLETE,
	CLEAR
} from "../actions/search";

const initialState = {
	searchResults: null
};

export default (state, action) => {
	if (typeof state === "undefined") {
		return initialState;
	}

	switch(action.type) {
		case SEARCH_COMPLETE:
			return {...state, searchResults: action.searchResults};
		case CLEAR:
			return {...state, searchResults: null};
		default:
			return state;
	}
};