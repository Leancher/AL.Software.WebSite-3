import { CATEGORIES_REQUEST } from "../actions/getCategoriesList";
import { parseCompositeString } from "./parseString";

export const initState = {
  items: [
    "Main",
    "0",
    "0",
    "Главная",
    "Главная страница сайта",
    "4173",
    "0",
    "",
    "0"
  ],
  state: "init",
  error: null
};

export const categories = (state = initState, action) => {
  switch (action.type) {
    // Редьюсер для действия, сообщающего об отправке запроса
    case CATEGORIES_REQUEST.SEND:
      // Требуется новый объект, текущий не меняем
      return Object.assign({}, state, {
        // Отправка в процессе
        state: "fetching",
        error: null
      });
    // Редьюсер для ответ на конкретные запросы
    case CATEGORIES_REQUEST.SUCCESS:
      return Object.assign({}, state, {
        items: parseCompositeString(action.payload),
        state: "success",
        error: null
      });
    // Редьюсер для неудачных ответов, записываем сообщение об ошибке.
    case CATEGORIES_REQUEST.FAIL:
      return Object.assign({}, state, {
        state: "fail",
        error: action.payload
      });
    default:
      return Object.assign({}, state);
  }
};
