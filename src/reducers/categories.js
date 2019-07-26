import {
  GET_CAT_LIST_REQUEST,
  GET_CAT_LIST_SUCCESS,
  GET_CAT_LIST_FAIL
} from "../actions/index";

const initialState = {
  items: [
    "Main",
    "0",
    "0",
    "Главная",
    "Главная страница сайта",
    "4173",
    "0",
    "",
    "0"
  ],
  isFetching: false
};

const parseCompositeString = string =>
  string.split("&").map(item => item.split(";"));

export const categories = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAT_LIST_REQUEST:
      return state;
    case GET_CAT_LIST_SUCCESS:
      return { items: parseCompositeString(action.payload), isFetching: true };
    case GET_CAT_LIST_FAIL:
      return state;
    default:
      return state;
  }
};
