import * as Actions from "./" ;

it("test action apiError", () => {
	const message = "Testing 123";
	expect(Actions.apiError(message)).toMatchObject({
		type: Actions.API_ERROR,
		message
	});
});

it("test action getTotalCost", () => {
	expect(Actions.getTotalCost()).toMatchObject({
		type: Actions.GET_TOTAL_COST
	});
});

it("test action totalCostChanged" , () => {
	const totalCost = "$0.99";
	expect(Actions.totalCostChanged(totalCost)).toMatchObject({
		type: Actions.TOTAL_COST_CHANGED,
		totalCost
	});
});