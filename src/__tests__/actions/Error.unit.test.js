import * as Actions from "../../actions/error" ;

it("test action method apiError returns API_ERROR action type", () => {
	const message = "Testing 123";
	expect(Actions.apiError(message)).toMatchObject({
		type: Actions.API_ERROR,
		message
	});
});
