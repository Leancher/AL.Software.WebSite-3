import { SET_NUMBER_CATEGORY } from "../actions/index";

// Определили первоначальное
const initialState = 1;

// Одна из вывзываемых функция-редьюсер, которая
// при совпадении типа возващет новое значение
const curCategory = (state = initialState, action) => {
  switch (action.type) {
    case SET_NUMBER_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

export default curCategory;
