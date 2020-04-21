import configureMockStore from 'redux-mock-store'

const mockStore = configureMockStore();
const store = mockStore({ todos: [] })

import Api from "../../api" ;

it("should return total cost", async () => {
	expect(store).not.toBeNull();
  expect(store.dispatch).toBeDefined();

  // TODO: CORS for localhost
  // const result = await Api.getTotalCost(store.dispatch);
});