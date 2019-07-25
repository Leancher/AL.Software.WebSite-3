import { serverRequest } from "../containers/requestHandler";

export const SET_NUMBER_CATEGORY = "SET_NUMBER_CATEGORY";

export const GET_CAT_LIST_REQUEST = "GET_CAT_LIST_REQUEST";
export const GET_CAT_LIST_SUCCESS = "GET_CAT_LIST_SUCCESS";
export const GET_CAT_LIST_FAIL = "GET_CAT_LIST_FAIL";

export const setCurrentCategory = number => ({
  type: SET_NUMBER_CATEGORY,
  payload: number
});

// Асинхронное действие. Вызывается в несколько этапов. Сначала
// происходит действие GET_CAT_LIST_REQUEST и происходит запрос HTTP.
// Затем по результатам запроса через промис происходит соответсвующее
// действие.
export const getCategoriesList = () => {
  return dispatch => {
    dispatch({
      type: GET_CAT_LIST_REQUEST
    });
    serverRequest("getCategoriesList")
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
