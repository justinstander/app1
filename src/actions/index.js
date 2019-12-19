export const GET_TOTAL_COST = "GET_TOTAL_COST";

export const getTotalCost = () => {
	return { type: GET_TOTAL_COST, totalCost: "$0.50" };
};