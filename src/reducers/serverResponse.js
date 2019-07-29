import { SERVER_REQUEST_CATEGORIES } from "../actions/index";

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

const response = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_REQUEST_CATEGORIES:
      return Object.assign({}, state, {
        items: parseCompositeString(action.payload),
        isFetching: true
      });
    default:
      console.log("response default");
      return Object.assign({}, state);
  }
};

export default response;
