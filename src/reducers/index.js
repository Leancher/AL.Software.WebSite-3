import { combineReducers } from "redux";
import { actionsHandler } from "./actionsHadler";

const buildReducers = () => {
  const categories = actionsHandler("getCategoriesList", "catsInitStore");
  const currentCategory = actionsHandler(
    "getCurrentCategory",
    "curCatInitStore"
  );
  const reducers = {
    categories,
    currentCategory
  };
  return reducers;
};

// Объединяем все редьсеры в один
// При обновлении состояния вызываются все функции-редьюсеры
// В каждом редьюсере есть аргументы: состояние и тип,
// Если тип совпадает, то возврщается новое значени, если
// нет, то первоначальное или неопределенное.
export const rootReducer = combineReducers(buildReducers());
