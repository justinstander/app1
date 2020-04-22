/**
 * [GET_TOTAL_COST description]
 * @type {String}
 */
export const GET_TOTAL_COST = "GET_TOTAL_COST";

/**
 * [TOTAL_COST_CHANGED description]
 * @type {String}
 */
export const TOTAL_COST_CHANGED = "TOTAL_COST_CHANGED";

/**
 * Get Total Cost action
 * 
 * @return {Object} action
 */
export const getTotalCost = () => ({ type: GET_TOTAL_COST });

/**
 * Total Cost Changed action
 * 
 * @param  {String} totalCost Total Cost
 * @return {Object}           action
 */
export const totalCostChanged = (totalCost) => ({
  type: TOTAL_COST_CHANGED,
  totalCost
});
