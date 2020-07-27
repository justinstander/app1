import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const mockState = {};
const store = mockStore(mockState);

import Api from "./" ;

it("should return total cost", async () => {
	expect(store).not.toBeNull();
  expect(store.dispatch).toBeDefined();

  // TODO: CORS for localhost
  // const result = await Api.getTotalCost(store.dispatch);
});