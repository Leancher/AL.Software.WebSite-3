import { getServerResponse } from "../containers/getServerResponse";

export const CATEGORIES_REQUEST = {
  SEND: "CATEGORIES_REQUEST_SEND",
  SUCCESS: "CATEGORIES_REQUEST_SUCCESS",
  FAIL: "CATEGORIES_REQUEST_FAIL"
};

export const CUR_CAT_REQUEST = {
  SEND: "CUR_CAT_REQUEST_SEND",
  SUCCESS: "CUR_CAT_REQUEST_SUCCESS",
  FAIL: "CUR_CAT_REQUEST_FAIL"
};

export const CUR_CAT_RESET_STATE = "CUR_CAT_RESET_STATE";

const buildReqStr = (command, cat = "", subCat = "", album = "", note = "") => {
  return `Command=${command}&cat=${cat}&subCat=${subCat}&album=${album}&note=${note}`;
};

export const setCatNum = catNum => ({
  type: "SET_CATEGORY_NUMBER",
  payload: catNum
});

export const getCategoriesList = () => {
  // Формируем строку запроса
  const reqStr = buildReqStr("getCategoriesList");
  // Вызываем обработчик запросов, аргументы: строка запроса
  // и действие при удачном ответе сервера
  return requestHandler(reqStr, CATEGORIES_REQUEST);
};

export const getCurrentCategory = catNum => {
  const reqStr = buildReqStr("getCurrentCategory", catNum);
  return requestHandler(reqStr, CUR_CAT_REQUEST);
};

// Асинхронное действие. Вызывается в несколько этапов. Вызываем
// действие REQUEST_SEND, делаем запрос HTTP.
// Затем по результатам запроса через промис происходит соответствующее
// действие.
const requestHandler = (requestString, type) => {
  return dispatch => {
    // Вызываем действие и делаем запрос на сервер
    dispatch({
      type: type.SEND
    });
    return getServerResponse(requestString)
      .then(response => {
        // При удачном ответе, вызываем действие в соответствии с запросом
        dispatch({
          type: type.SUCCESS,
          payload: response
        });
        return;
      })
      .catch(error => {
        // При неудачно - вызываем действие для ошибки
        dispatch({
          type: type.FAIL,
          payload: error
        });
      });
  };
};
