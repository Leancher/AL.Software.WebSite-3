import { CUR_CAT_REQUEST } from "../actions/getCurrentCategory";
import { parseCompositeString } from "../Utilites/parseString";
import { curCatInitStore } from "../store";

const responseCurCat = (store = curCatInitStore, action) => {
  switch (action.type) {
    case CUR_CAT_REQUEST.SEND:
      return Object.assign({}, store, {
        state: "fetching",
        error: null
      });
    case CUR_CAT_REQUEST.SUCCESS:
      const newStore = Object.assign({}, store, {
        items: parseCompositeString(action.payload),
        state: "success",
        error: null
      });
      return newStore;
    case CUR_CAT_REQUEST.FAIL:
      return Object.assign({}, store, {
        state: "fail",
        error: action.payload
      });
    case CUR_CAT_REQUEST.RESET:
      return Object.assign({}, store, {
        state: "init",
        error: null
      });
    default:
      return Object.assign({}, store);
  }
};

export default responseCurCat;
