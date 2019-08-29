import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { catsInitStore as categories } from "../store";
import { curCatInitStore as currentCategory } from "../store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import thunk from "redux-thunk";
import "../Utilites/setupTest";

import Body from "./Body";

describe("CategoryCaption-Body", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ categories, currentCategory });
  const wrapper = mount(
    <Provider store={store}>
      <Router>
        <Body categories={categories.items} catNum={5} />
      </Router>
    </Provider>
  );

  it("Render the connected component", () => {
    expect(wrapper.find(Body).length).toEqual(1);
  });

  it("+++ check Prop matches with initialState", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
