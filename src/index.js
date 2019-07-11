import "./index.css";
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import rootReducer from "./reducers";

const initialState = {
  categories: [
    "Главная",
    "Мои проекты",
    "Ремонт автомобилей",
    "Мои фотографии",
    "Вещи времен СССР",
    "Вещи времен 90-х",
    "История Череповца",
    "Заметки"
  ],
  currentCategory: 1,
  visibilityFilter: "SHOW_ALL",
  todos: [
    {
      completed: false,
      id: 0,
      text: "First todo"
    }
  ]
};

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
