import React from "react";
import { shallow } from "enzyme";
import { catsInitStore as categories } from "../store";

import Header from "../components/Header";
import "../Utilites/setupTest";

let wrapper;
describe("ComponentTest-Header", () => {
  beforeEach(() => {
    wrapper = shallow(<Header curCat={categories.items} />);
  });

  it("Render the DUMB component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("Snapshot 'Header' component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
