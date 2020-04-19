import * as Actions from "../../actions/main" ;

it("test action method apiError returns API_ERROR action type", () => {
	const message = "Testing 123";
	expect(Actions.apiError(message)).toMatchObject({
		type: Actions.API_ERROR,
		message
	});
});

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