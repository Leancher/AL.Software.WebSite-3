import { buildTypesList } from "../actions";
import { initStore } from "./initStore";

export const asyncActionsHandler = (actionName, initStoreName, parserFunc) => {
  // Получаем список типов действий
  const ACTION_TYPES = buildTypesList(actionName);
  // Возвращем функцию-редьюсер
  return (store, action) => {
    // Если Store неопределено, то назначаем нужное
    if (!store) store = initStore[initStoreName];
    // Определяем нужный тип
    switch (action.type) {
      // Редьюсер для действия, сообщающего об отправке запроса
      case ACTION_TYPES.SEND:
        // Требуется новый объект, текущий не меняем
        return Object.assign({}, store, {
          // Отправка в процессе
          state: "fetching",
          error: null
        });
      // Редьюсер для ответ на конкретные запросы
      case ACTION_TYPES.SUCCESS:
        return Object.assign({}, store, {
          items: parserFunc(action.payload),
          state: "success",
          error: null
        });
      // Редьюсер для неудачных ответов, записываем сообщение об ошибке.
      case ACTION_TYPES.FAIL:
        return Object.assign({}, store, {
          state: "fail",
          error: action.payload
        });
      default:
        return Object.assign({}, store);
    }
  };
};
