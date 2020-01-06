import {
	API_ERROR,
	TOTAL_COST_CHANGED
} from "../actions/main";

const initialState = {
	totalCost: "$",
	message: null
};

export default (state, action) => {
	if (typeof state === "undefined") {
		return initialState;
	}

	switch(action.type) {
		case TOTAL_COST_CHANGED:
			return {...state, totalCost: action.totalCost};
		case API_ERROR:
			return {...state, message: action.message};
		default:
			return state;
	}
};