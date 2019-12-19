import { GET_TOTAL_COST } from "../actions";

const initialState = {
	totalCost: "$..."
};

export default (state, action) => {
	if (typeof state === 'undefined') {
    	return initialState;
 	}

	switch(action.type) {
		case GET_TOTAL_COST:
			return {...state, totalCost: action.totalCost};
		default:
			return state;
	}
};