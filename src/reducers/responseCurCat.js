import { SERVER_REQUEST_CUR_CAT } from "../actions/index";
import { parseCompositeString } from "./parseString";

const initialState = {
  currentCategory: {
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
    isFetched: false,
    error: null
  }
};

const responseCurCat = (state = initialState, action) => {
  switch (action.type) {
    // Редьюсер для ответ на конкретные запросы
    case SERVER_REQUEST_CUR_CAT:
      return Object.assign({}, state, {
        currentCategory: {
          items: parseCompositeString(action.payload),
          isFetched: true,
          error: null
        }
      });
    default:
      return Object.assign({}, state);
  }
};

export default responseCurCat;
