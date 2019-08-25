import { CAT_REQUEST_TYPES } from "../actions/getCategoriesList";
import { parseCompositeString } from "../Utilites/parseString";
import { catsInitStore } from "../store";

export const categories = (store = catsInitStore, action) => {
  switch (action.type) {
    // Редьюсер для действия, сообщающего об отправке запроса
    case CAT_REQUEST_TYPES.SEND:
      // Требуется новый объект, текущий не меняем
      return Object.assign({}, store, {
        // Отправка в процессе
        state: "fetching",
        error: null
      });
    // Редьюсер для ответ на конкретные запросы
    case CAT_REQUEST_TYPES.SUCCESS:
      return Object.assign({}, store, {
        items: parseCompositeString(action.payload),
        state: "success",
        error: null
      });
    // Редьюсер для неудачных ответов, записываем сообщение об ошибке.
    case CAT_REQUEST_TYPES.FAIL:
      return Object.assign({}, store, {
        state: "fail",
        error: action.payload
      });
    default:
      return Object.assign({}, store);
  }
};
