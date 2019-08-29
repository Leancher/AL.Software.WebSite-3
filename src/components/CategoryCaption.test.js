import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

import CategoryCaption from "./CategoryCaption";

Enzyme.configure({ adapter: new Adapter() });

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
