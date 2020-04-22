import * as Actions from "../../actions/About" ;

it("test action method getTotalCost returns GET_TOTAL_COST action type", () => {
	expect(Actions.getTotalCost()).toMatchObject({
		type: Actions.GET_TOTAL_COST
	});
});

it("test action totalCostChanged returns TOTAL_COST_CHANGED action type " , () => {
	const totalCost = "$0.99";
	expect(Actions.totalCostChanged(totalCost)).toMatchObject({
		type: Actions.TOTAL_COST_CHANGED,
		totalCost
	});
});