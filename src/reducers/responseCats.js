import { REQUEST_CATEGORIES } from "../actions/index";
import { parseCompositeString } from "./parseString";
import { initialState } from "./initialState";

const responseCats = (state = initialState, action) => {
  switch (action.type) {
    // Редьюсер для действия, сообщающего об отправке запроса
    case REQUEST_CATEGORIES.SEND:
      // Требуется новый объект, текущий не меняем
      return Object.assign({}, state, {
        categories: {
          // Отправка в процессе
          isFetched: false,
          error: null
        }
      });
    // Редьюсер для ответ на конкретные запросы
    case REQUEST_CATEGORIES.SUCCESS:
      return Object.assign({}, state, {
        categories: {
          items: parseCompositeString(action.payload),
          isFetched: true,
          error: null
        }
      });
    // Редьюсер для неудачных ответов, записываем сообщение об ошибке.
    case REQUEST_CATEGORIES.FAIL:
      return Object.assign({}, state, {
        categories: {
          isFetched: true,
          error: action.payload
        }
      });
    default:
      return Object.assign({}, state);
  }
};

export default responseCats;
