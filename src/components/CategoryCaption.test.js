import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
//import { shallowToJson } from "enzyme-to-json";

import CategoryCaption from "./CategoryCaption";

Enzyme.configure({ adapter: new Adapter() });

// function setup() {
//   const props = {
//     catCaption: "Test caption"
//   };

//   const enzymeWrapper = mount(<CategoryCaption {...props} />);

//   return {
//     props,
//     enzymeWrapper
//   };
// }

describe("CategoryCaption", () => {
  it("should render correctly", () => {
    const wrapper = mount(<CategoryCaption catCaption={"Test caption"} />);
    //const { enzymeWrapper } = setup();
    //const output = shallow(<CategoryCaption />);
    expect(
      wrapper.contains(<div className="col-10">Test caption</div>)
    ).toEqual(true);
  });
});
