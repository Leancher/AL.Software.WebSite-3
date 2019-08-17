import { buildReqStr, requestHandler } from "./requestHundler";

export const CAT_REQUEST_TYPES = {
  SEND: "CATEGORIES_REQUEST_SEND",
  SUCCESS: "CATEGORIES_REQUEST_SUCCESS",
  FAIL: "CATEGORIES_REQUEST_FAIL",
  RESET: "CATEGORIES_REQUEST_RESET"
};

export function getCategoriesList() {
  // Формируем строку запроса
  const reqStr = buildReqStr("getCategoriesList");
  return dispatch => {
    // Вызываем обработчик запросов, аргументы: dispatch для вызова других действий,
    // строка запроса и список действий для обработки результата
    return requestHandler(dispatch, reqStr, CAT_REQUEST_TYPES);
  };
}
