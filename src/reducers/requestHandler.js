import { SERVER_REQUEST } from "../actions/index";

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

const catNum = (state = initialState, action) => {
  switch (action.type) {
    case SERVER_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default catNum;
