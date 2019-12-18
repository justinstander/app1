export const GET_TOTAL_COST = "GET_TOTAL_COST";

export const getTotalCost = () => {
	// TODO: API call to get current monthly bill total

 	return {
    	type: GET_TOTAL_COST,
    	totalCost: "$0.50" // TODO: Replace value from API response
  	};
}