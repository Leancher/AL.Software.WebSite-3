import { combineReducers } from "redux";
import { pageReducer } from "./page";
import { userReducer } from "./user";
import { categories } from "./categories";
import curCategory from "./curCategory";

// Объединяем все редьсеры в один
// При обновлении состояния вызываются все функции-редьюсеры
// В каждом редьюсере есть аргументы: состояние и тип,
// Если тип совпадает, то возврщается новое значени, если
// нет, то первоначальное или неопределенное.
export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  categories: categories,
  curCategory: curCategory
});
