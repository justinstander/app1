import Api from "../Api";

export const GET_TOTAL_COST = "GET_TOTAL_COST";

export const getTotalCost = () => {
	const totalCost = Api.getTotalCost();
	return { type: GET_TOTAL_COST, totalCost };
};