import React from "react";
import { shallow } from "enzyme";
import { shallowToJson } from "enzyme-to-json";

import CategoryCaption from "../components/CategoryCaption";
import "../Utilites/setupTest";

let wrapper;
describe("ComponentTest-CategoryCaption", () => {
  beforeEach(() => {
    wrapper = shallow(<CategoryCaption catCaption={"Test caption"} />);
  });

  it("Render the DUMB component", () => {
    expect(wrapper.length).toEqual(1);
  });

  it("Should render 'catCaption' element", () => {
    expect(
      wrapper.contains(<div className="col-10">Test caption</div>)
    ).toEqual(true);
  });

  it("Should render 'CategoryCaption' component", () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
