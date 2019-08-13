import { initState, categories } from "./responseCats";
import { CATEGORIES_REQUEST } from "../actions/getCategoriesList";

describe("categories Reducer", () => {
  it("Should return the initial state", () => {
    expect(categories(undefined, {})).toEqual(initState);
  });
  it("Should return fetching state", () => {
    expect(
      categories(
        {},
        {
          type: CATEGORIES_REQUEST.SEND
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
          type: CATEGORIES_REQUEST.FAIL,
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
          type: CATEGORIES_REQUEST.SUCCESS,
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
