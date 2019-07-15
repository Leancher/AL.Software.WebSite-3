import { serverRequest } from "../containers/requestHandler";

export const SET_NUMBER_CATEGORY = "SET_NUMBER_CATEGORY";

export const GET_CAT_LIST_REQUEST = "GET_CAT_LIST_REQUEST";
export const GET_CAT_LIST_SUCCESS = "GET_CAT_LIST_SUCCESS";
export const GET_CAT_LIST_FAIL = "GET_CAT_LIST_FAIL";

export const setCurrentCategory = number => ({
  type: SET_NUMBER_CATEGORY,
  payload: number
});

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
        alert(error); // Error: Not Found
      });
  };
};
