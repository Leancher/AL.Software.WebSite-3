import React from "react";
import Enzyme, { mount, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { shallowToJson } from "enzyme-to-json";

import CategoryCaption from "./CategoryCaption";

Enzyme.configure({ adapter: new Adapter() });

const wrapper = mount(<CategoryCaption catCaption={"Test caption"} />);
describe("Component tests", () => {
  it("Should render 'catCaption' element", () => {
    expect(
      wrapper.contains(<div className="col-10">Test caption</div>)
    ).toEqual(true);
  });
  it("Should render 'CategoryCaption' component", () => {
    const output = shallow(<CategoryCaption catCaption={"Test caption"} />);
    expect(shallowToJson(output)).toMatchSnapshot();
  });
});
