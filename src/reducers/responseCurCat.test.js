import { currentCategory } from "./responseCurCat";
import { curCatInitStore } from "../store";
import { CUR_CAT_REQUEST } from "../actions/getCurrentCategory";

describe("categories Reducer", () => {
  it("Should return the initial state", () => {
    expect(currentCategory(undefined, {})).toEqual(curCatInitStore);
  });
  it("Should return fetching state", () => {
    expect(
      currentCategory(
        {},
        {
          type: CUR_CAT_REQUEST.SEND
        }
      )
    ).toEqual({
      state: "fetching",
      error: null
    });
  });
  it("Should return fail state", () => {
    expect(
      currentCategory(
        {},
        {
          type: CUR_CAT_REQUEST.FAIL,
          payload: "error"
        }
      )
    ).toEqual({
      state: "fail",
      error: "error"
    });
  });
  it("Should return success state", () => {
    expect(
      currentCategory(
        {},
        {
          type: CUR_CAT_REQUEST.SUCCESS,
          payload: "item11;item12&item21;item22"
        }
      )
    ).toEqual({
      items: [["item11", "item12"], ["item21", "item22"]],
      state: "success",
      error: null
    });
  });
});
