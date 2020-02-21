import React from "react";
import Results from "../../../components/results/results";
import Enzyme, { mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });

describe("<Results />", () => {
  it("is alive on start", () => {
    let app = shallow(<Results />);
    expect(app.find("#resultsDisplay").exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Results />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
