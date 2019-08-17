import { CUR_CAT_REQUEST } from "../actions/getCurrentCategory";
import { parseCompositeString } from "../Utilites/parseString";
const initState = {
  items: [
    [
      "PatternPage",
      "5",
      "0",
      "Страница-шаблон",
      "Описание странцы-щаблонв",
      "3",
      "1",
      "0",
      "1"
    ],
    "SubCategory",
    "5",
    "1",
    "Страница-шаблон подкатегории",
    "Описание страница-шаблона подкатегории",
    "3",
    "0",
    "1",
    "0"
  ],
  state: "init",
  error: null
};

const responseCurCat = (store = initState, action) => {
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
