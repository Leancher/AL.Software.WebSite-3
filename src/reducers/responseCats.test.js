import { categories } from "./responseCats";
import { catsInitStore } from "../store";
import { CAT_REQUEST_TYPES } from "../actions/getCategoriesList";

describe("categories Reducer", () => {
  it("Should return the initial state", () => {
    expect(categories(undefined, {})).toEqual(catsInitStore);
  });
  it("Should return fetching state", () => {
    expect(
      categories(
        {},
        {
          type: CAT_REQUEST_TYPES.SEND
        }
      )
    ).toEqual({
      state: "fetching",
      error: null
    });
  });
  it("Should return fail state", () => {
    expect(
      categories(
        {},
        {
          type: CAT_REQUEST_TYPES.FAIL,
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
      categories(
        {},
        {
          type: CAT_REQUEST_TYPES.SUCCESS,
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
