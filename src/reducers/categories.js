import {
  GET_CAT_LIST_REQUEST,
  GET_CAT_LIST_SUCCESS,
  GET_CAT_LIST_FAIL
} from "../actions/index";

const initialState = [
  "Главная",
  "Мои проекты",
  "Ремонт автомобилей",
  "Мои фотографии",
  "Вещи времен СССР",
  "Вещи времен 90-х",
  "История Череповца",
  "Заметки"
];

const parseCompositeString = string =>
  string.split("&").map(item => item.split(";"));

export const categories = (state = [], action) => {
  switch (action.type) {
    case GET_CAT_LIST_REQUEST:
      return { ...state, isFetching: true, error: "" };
    case GET_CAT_LIST_SUCCESS:
      console.log("GET_CAT_LIST_SUCCESS ");
      console.log(parseCompositeString(action.payload));
      return parseCompositeString(action.payload);
    case GET_CAT_LIST_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };
    default:
      return state;
  }
};
