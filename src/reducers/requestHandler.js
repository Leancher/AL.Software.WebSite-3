import { REQUEST_SEND, REQUEST_SUCCESS, REQUEST_FAIL } from "../actions/index";

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
  isFetching: true
};

export const requestHandler = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_SEND:
      return Object.assign({}, state);
    case REQUEST_SUCCESS:
      return Object.assign({}, state, {
        items: action.payload,
        isFetching: false
      });
    case REQUEST_FAIL:
      return state;
    default:
      console.log("requestHandler default");
      return Object.assign({}, state);
  }
};
