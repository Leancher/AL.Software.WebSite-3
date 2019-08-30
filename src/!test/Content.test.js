import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { catsInitStore as categories } from "../store";
import { curCatInitStore as currentCategory } from "../store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "../Utilites/setupTest";

import ConnectedContent from "../components/Content";

describe("ComponentTest-Content", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ categories, currentCategory });
  const wrapper = mount(
    <Provider store={store}>
      <ConnectedContent curCatProps={categories.items} catNum={5} />
    </Provider>
  );

  it("Render-component", () => {
    expect(wrapper.find(ConnectedContent).length).toEqual(1);
  });

  it("Snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
