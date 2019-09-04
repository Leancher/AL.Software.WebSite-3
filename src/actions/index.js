import { buildReqStr, asyncActionCreator } from "./asyncActionCreator";

const actionNames = {
  getCategoriesList: "CATEGORIES",
  getCurrentCategory: "CUR_CAT",
  getPhotosList: "PHOTO"
};

export const buildTypesList = action => {
  const actionName = actionNames[action];
  const types = {
    SEND: `${actionName}_REQUEST_SEND`,
    SUCCESS: `${actionName}_REQUEST_SUCCESS`,
    FAIL: `${actionName}_REQUEST_FAIL`,
    RESET: `${actionName}_REQUEST_RESET`
  };
  return types;
};

const defineAction = (action, catNum, subCatNum) => {
  const actionTypes = buildTypesList(action);
  // Формируем строку запроса
  const reqStr = buildReqStr(action, catNum);
  return dispatch => {
    // Вызываем обработчик запросов, аргументы: dispatch для вызова других действий,
    // строка запроса и список действий для обработки результата
    return asyncActionCreator(dispatch, reqStr, actionTypes);
  };
};

export const getCategoriesList = () => defineAction("getCategoriesList");
export const getCurrentCategory = catNum =>
  defineAction("getCurrentCategory", catNum);
export const getPhotosList = (catNum, subCatNum) =>
  defineAction("getPhotosList", catNum, subCatNum);
