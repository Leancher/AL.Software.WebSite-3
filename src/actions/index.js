import { getServerResponse } from "../containers/getServerResponse";

export const SET_CATEGORY_NUMBER = "SET_NUMBER_CATEGORY";
export const SERVER_REQUEST_CATEGORIES = "SERVER_REQUEST_CATEGORIES";
export const SERVER_REQUEST_CUR_CAT = "SERVER_REQUEST_CUR_CAT";

export const REQUEST_SEND = "REQUEST_SEND";
export const REQUEST_SUCCESS = "REQUEST_SUCCESS";
export const REQUEST_FAIL = "REQUEST_FAIL";

const buildReqStr = (command, cat = "", subCat = "", album = "", note = "") => {
  return `Command=${command}&cat=${cat}&subCat=${subCat}&album=${album}&note=${note}`;
};

export const setCatNum = catNum => ({
  type: SET_CATEGORY_NUMBER,
  payload: catNum
});

export const getCategoriesList = () => {
  // Формируем строку запроса
  const reqStr = buildReqStr("getCategoriesList");
  // Вызываем обработчик запросов, аргументы: строка запроса
  // и действие при удачном ответе сервера
  return requestHandler(reqStr, SERVER_REQUEST_CATEGORIES);
};

export const getCurrentCategory = catNum => {
  const reqStr = buildReqStr("getCurrentCategory", catNum);
  return requestHandler(reqStr, SERVER_REQUEST_CUR_CAT);
};

// Асинхронное действие. Вызывается в несколько этапов. Вызываем
// действие REQUEST_SEND, делаем запрос HTTP.
// Затем по результатам запроса через промис происходит соответствующее
// действие.
const requestHandler = (requestString, type) => {
  return dispatch => {
    // Вызываем действие и делаем запрос на сервер
    dispatch({
      type: REQUEST_SEND
    });
    return getServerResponse(requestString)
      .then(response => {
        // При удачном ответе, вызываем действие в соответствии с запросом
        dispatch({
          type: type,
          payload: response
        });
        return;
      })
      .catch(error => {
        console.log(error);
        // При неудачно - вызываем действие для ошибки
        dispatch({
          type: REQUEST_FAIL,
          payload: error
        });
      });
  };
};
