/* import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getCurrentCategory, CUR_CAT_REQUEST } from "./getCurrentCategory";

const mockStore = configureMockStore([thunk]);

const expectedPayload = "Main;0;0;Главная;Главная страница сайта;4173;0;;0";

describe("Async action test", () => {
  const store = mockStore({});
  it("CUR_CAT_REQUEST_SUCCESS", () => {
    return store.dispatch(getCurrentCategory(0)).then(() => {
      const result = store.getActions();
      expect(result[2]["type"]).toEqual(CUR_CAT_REQUEST.SUCCESS);
      const isIncludes = result[2]["payload"].includes(expectedPayload);
      expect(true).toEqual(isIncludes);
    });
  });
}); */
