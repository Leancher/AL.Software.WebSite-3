import { SERVER_REQUEST_CATEGORIES } from "../actions/index";

const initialState = {
  categories: {
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
    isFetching: false,
    error: null
  }
};

const parseCompositeString = string =>
  string.split("&").map(item => item.split(";"));

const response = (state = initialState, action) => {
  switch (action.type) {
    // Редьюсер для ответ на конкретные запросы
    case SERVER_REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        categories: {
          items: parseCompositeString(action.payload),
          isFetching: false,
          error: null
        }
      });
    default:
      return Object.assign({}, state);
  }
};

export default response;
