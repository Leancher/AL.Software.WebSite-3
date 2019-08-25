import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getCategoriesList, CAT_REQUEST_TYPES } from "./getCategoriesList";

const mockStore = configureMockStore([thunk]);

const expectedPayload = "Main;0;0;Главная;Главная страница сайта;4173;0;;0";

// Список тестов
describe("Async action test", () => {
  const store = mockStore({});
  // Тест в списке
  it("CATEGORIES_REQUEST_SUCCESS", () => {
    // Вызываем нужное действие для теста
    return store.dispatch(getCategoriesList()).then(() => {
      // В store.getActions() получаем ответ. Затем выбираем нужное для теста.
      const result = store.getActions();
      // Если значение type совпадает
      expect(result[2]["type"]).toEqual(CAT_REQUEST_TYPES.SUCCESS);
      // Если в ответе содержатся нужные данные
      const isIncludes = result[2]["payload"].includes(expectedPayload);
      expect(true).toEqual(isIncludes);
    });
  });
});
