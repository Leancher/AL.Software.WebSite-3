import { buildReqStr, requestHandler } from "./requestHundler";

export const CATEGORIES_REQUEST = {
  SEND: "CATEGORIES_REQUEST_SEND",
  SUCCESS: "CATEGORIES_REQUEST_SUCCESS",
  FAIL: "CATEGORIES_REQUEST_FAIL",
  RESET: "CATEGORIES_REQUEST_RESET"
};

export const getCategoriesList = () => {
  // Формируем строку запроса
  const reqStr = buildReqStr("getCategoriesList");
  // Вызываем обработчик запросов, аргументы: строка запроса
  // и список действий для обработки результата
  return requestHandler(reqStr, CATEGORIES_REQUEST);
};
