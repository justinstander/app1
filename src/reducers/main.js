import { GET_TOTAL_COST } from "../actions"

export default (state = {}, action) => {
	switch(action.type) {
		case GET_TOTAL_COST:
			return {
				...state,
				totalCost: action.totalCost
			};
		default:
			return state;
	}
}