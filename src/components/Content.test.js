import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import configureStore from "redux-mock-store";
import { catsInitStore as categories } from "../store";
import { curCatInitStore as currentCategory } from "../store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Content from "./Content";

Enzyme.configure({ adapter: new Adapter() });

describe(">>> Content --- REACT-REDUX (Mount + wrapping in <Provider>)", () => {
  const initialState = { categories, currentCategory };
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <Content catNum={5} />
      </Provider>
    );
  });

  it("+++ render the connected(SMART) component", () => {
    //expect(wrapper.find(Content).length).toEqual(1);
  });

  it("+++ check Prop matches with initialState", () => {
    //expect(wrapper.find(Content).prop("categories")).toEqual(initialState);
  });
});
