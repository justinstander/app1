export const GET_TOTAL_COST = "GET_TOTAL_COST";
export const TOTAL_COST_CHANGED = "TOTAL_COST_CHANGED";

export const getTotalCost = () => ({ type: GET_TOTAL_COST });

export const totalCostChanged = (totalCost) => ({
  type: TOTAL_COST_CHANGED,
  totalCost
});
