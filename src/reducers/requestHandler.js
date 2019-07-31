import { REQUEST_SEND, REQUEST_SUCCESS, REQUEST_FAIL } from "../actions/index";

const initialState = {
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
};

export const requestHandler = (state = initialState, action) => {
  switch (action.type) {
    // Редьюсер для действия, сообщающего об отправке запроса
    case REQUEST_SEND:
      // Требуется новый объект, текущий не меняем
      return Object.assign({}, state, {
        categories: {
          // Отправка в процессе
          isFetching: true,
          error: null
        }
      });
    // Оедьюсер по-умолчаниюю для удачных ответов.
    // Конкретные описаны в serverResponse.
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        categories: {
          items: action.payload,
          // Отправка закончена.
          isFetching: false,
          // Ошибок нет
          error: null
        }
      });
    // Редьюсер для неудачных ответов, записываем сообщение об ошибке.
    case REQUEST_FAIL:
      return Object.assign({}, state, {
        categories: {
          isFetching: false,
          error: action.payload
        }
      });
    default:
      return Object.assign({}, state, {
        categories: {
          isFetching: false,
          error: null
        }
      });
  }
};
