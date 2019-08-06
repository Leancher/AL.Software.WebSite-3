import { CATEGORIES_REQUEST } from "../actions/index";
import { parseCompositeString } from "./parseString";
//import { initialState } from "./initialState";

const initState = {
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
  state: false,
  error: null
};

const responseCats = (state = initState, action) => {
  switch (action.type) {
    // Редьюсер для действия, сообщающего об отправке запроса
    // case CATEGORIES_REQUEST.SEND:
    //   // Требуется новый объект, текущий не меняем
    //   return Object.assign({}, state, {
    //     categories: {
    //       // Отправка в процессе
    //       isFetched: false,
    //       error: null
    //     }
    //   });
    // Редьюсер для ответ на конкретные запросы
    case CATEGORIES_REQUEST.SUCCESS:
      return Object.assign({}, state, {
        items: parseCompositeString(action.payload),
        isFetched: true,
        error: null
      });
    // Редьюсер для неудачных ответов, записываем сообщение об ошибке.
    case CATEGORIES_REQUEST.FAIL:
      return Object.assign({}, state, {
        isFetched: true,
        error: action.payload
      });
    default:
      return Object.assign({}, state);
  }
};

export default responseCats;
