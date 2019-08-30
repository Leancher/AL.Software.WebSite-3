import React from "react";
import { shallow } from "enzyme";
import { catsInitStore as categories } from "../store";

import NavigationMenu from "../components/NavigationMenu";
import "../Utilites/setupTest";

let wrapper;
describe("ComponentTest-NavigationMenu", () => {
  beforeEach(() => {
    wrapper = shallow(<NavigationMenu categories={categories.items} />);
  });

  it("Render the DUMB component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("Snapshot 'NavigationMenu' component", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
