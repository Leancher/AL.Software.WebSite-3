import React from "react";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { catsInitStore as categories } from "../store";
//import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "../Utilites/setupTest";

import Body from "./Body";

describe("CategoryCaption-Body", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ categories, catNum: 5 });
  const wrapper = mount(<Body {...store} />);

  it("Render the connected component", () => {
    expect(wrapper.find(Body).length).toEqual(1);
  });

  it("+++ check Prop matches with initialState", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
