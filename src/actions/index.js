import { getServerResponse } from "../containers/getServerResponse";

export const SET_CATEGORY_NUMBER = "SET_NUMBER_CATEGORY";
export const SERVER_REQUEST_CATEGORIES = "SERVER_REQUEST_CATEGORIES";

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
  const reqStr = buildReqStr("getCategoriesList");
  return requestHandler(reqStr, SERVER_REQUEST_CATEGORIES);
};

// Асинхронное действие. Вызывается в несколько этапов. Сначала
// происходит действие GET_CAT_LIST_REQUEST и происходит запрос HTTP.
// Затем по результатам запроса через промис происходит соответствующее
// действие.
const requestHandler = (requestString, type) => {
  return dispatch => {
    dispatch({
      type: REQUEST_SEND
    });
    return getServerResponse(requestString)
      .then(response => {
        dispatch({
          type: type,
          payload: response
        });
        return;
      })
      .catch(error => {
        console.log(error); // Error: Not Found
      });
  };
};

/* export const getCategoriesList = () => {
  const reqStr = buildReqStr("getCategoriesList");
  return dispatch =>
    dispatch(requestHandler(reqStr, SERVER_REQUEST_CATEGORIES));
};

// Асинхронное действие. Вызывается в несколько этапов. Сначала
// происходит действие GET_CAT_LIST_REQUEST и происходит запрос HTTP.
// Затем по результатам запроса через промис происходит соответствующее
// действие.
const requestHandler = (requestString, type) => {
  console.log("requestHandler");
  console.log(requestString);
  return dispatch => {
    dispatch({
      type: REQUEST_SEND
    });
    return getServerResponse(requestString)
      .then(response => {
        dispatch({
          type: type,
          payload: response
        });
        return;
      })
      .catch(error => {
        console.log(error); // Error: Not Found
      });
  };
}; */
