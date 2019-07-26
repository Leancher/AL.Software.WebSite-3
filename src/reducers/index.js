import { combineReducers } from "redux";
import { categories } from "./categories";
import catNum from "./categoryNumber";

// Объединяем все редьсеры в один
// При обновлении состояния вызываются все функции-редьюсеры
// В каждом редьюсере есть аргументы: состояние и тип,
// Если тип совпадает, то возврщается новое значени, если
// нет, то первоначальное или неопределенное.
export const rootReducer = combineReducers({
  categories: categories,
  catNum: catNum
});
