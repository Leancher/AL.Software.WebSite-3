import { combineReducers } from "redux";
import { requestHandler } from "./requestHandler";
import response from "./serverResponse";
import catNum from "./categoryNumber";

// Объединяем все редьсеры в один
// При обновлении состояния вызываются все функции-редьюсеры
// В каждом редьюсере есть аргументы: состояние и тип,
// Если тип совпадает, то возврщается новое значени, если
// нет, то первоначальное или неопределенное.
export const rootReducer = combineReducers({
  requestHandler,
  response,
  catNum: catNum
});
