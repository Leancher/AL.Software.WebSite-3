import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { getCategoriesList } from "./getCategoriesList";
import { parseCompositeString } from "../Utilites/parseString";

const mockStore = configureMockStore([thunk]);

const expectedActions = [
  "Main",
  "0",
  "0",
  "Главная",
  "Главная страница сайта",
  "4173",
  "0",
  "",
  "0"
];

// Список тестов
describe("Async action test", () => {
  // Тест в списке
  it("getCategoriesList", () => {
    const store = mockStore({});
    // Вызываем нужное действие для теста
    return store.dispatch(getCategoriesList()).then(() => {
      // В store.getActions() получаем ответ. Затем выбираем нужное для теста.
      const result = parseCompositeString(store.getActions()[2]["payload"])[0];
      expect(result).toEqual(expectedActions);
    });
  });
});
