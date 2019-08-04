import { getServerResponse } from "../containers/getServerResponse";

export const REQUEST_CATEGORIES = {
  SEND: "REQUEST_CATEGORIES_SEND",
  SUCCESS: "REQUEST_CATEGORIES_SUCCESS",
  FAIL: "REQUEST_CATEGORIES_FAIL"
};

export const REQUEST_CUR_CAT = {
  SEND: "REQUEST_CUR_CAT_SEND",
  SUCCESS: "REQUEST_CUR_CAT_SUCCESS",
  FAIL: "REQUEST_CUR_CAT_FAIL"
};

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
  return requestHandler(reqStr, REQUEST_CATEGORIES);
};

export const getCurrentCategory = catNum => {
  const reqStr = buildReqStr("getCurrentCategory", catNum);
  return requestHandler(reqStr, REQUEST_CUR_CAT);
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
