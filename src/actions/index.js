import { getServerResponse } from "../containers/getServerResponse";

export const SET_CATEGORY_NUMBER = "SET_NUMBER_CATEGORY";
export const SERVER_REQUEST = "SERVER_REQUEST";

export const GET_CAT_LIST_REQUEST = "GET_CAT_LIST_REQUEST";
export const GET_CAT_LIST_SUCCESS = "GET_CAT_LIST_SUCCESS";
export const GET_CAT_LIST_FAIL = "GET_CAT_LIST_FAIL";

const buildReqStr = (command, cat = "", subCat = "", album = "", note = "") => {
  return `Command=${command}&cat=${cat}&subCat=${subCat}&album=${album}&note=${note}`;
};

export const setCatNum = catNum => ({
  type: SET_CATEGORY_NUMBER,
  payload: catNum
});

export const getCategoriesList = () => ({
  type: SERVER_REQUEST,
  payload: requestHandler(buildReqStr("getCategoriesList"))
});

// Асинхронное действие. Вызывается в несколько этапов. Сначала
// происходит действие GET_CAT_LIST_REQUEST и происходит запрос HTTP.
// Затем по результатам запроса через промис происходит соответствующее
// действие.
const requestHandler = requestString => {
  return dispatch => {
    dispatch({
      type: GET_CAT_LIST_REQUEST
    });
    getServerResponse(requestString)
      .then(response => {
        dispatch({
          type: GET_CAT_LIST_SUCCESS,
          payload: response
        });
        return;
      })
      .catch(error => {
        console.log(error); // Error: Not Found
      });
  };
};
