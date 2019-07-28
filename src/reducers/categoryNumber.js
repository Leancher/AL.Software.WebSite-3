import { SET_CATEGORY_NUMBER } from "../actions/index";

// Определили первоначальное
const initialState = 1;

// Одна из вывзываемых функция-редьюсер, которая
// при совпадении типа возвращает новое значение
const catNum = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY_NUMBER:
      return action.payload;
    default:
      return state;
  }
};

export default catNum;
