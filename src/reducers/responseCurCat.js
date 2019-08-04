import { REQUEST_CUR_CAT } from "../actions/index";
import { parseCompositeString } from "./parseString";
import { initialState } from "./initialState";

const responseCurCat = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CUR_CAT.SEND:
      return Object.assign({}, state, {
        currentCategory: {
          isFetched: false,
          error: null
        }
      });
    case REQUEST_CUR_CAT.SUCCESS:
      return Object.assign({}, state, {
        currentCategory: {
          items: parseCompositeString(action.payload),
          isFetched: true,
          error: null
        }
      });
    case REQUEST_CUR_CAT.FAIL:
      return Object.assign({}, state, {
        currentCategory: {
          isFetched: true,
          error: action.payload
        }
      });
    default:
      return Object.assign({}, state);
  }
};

export default responseCurCat;
