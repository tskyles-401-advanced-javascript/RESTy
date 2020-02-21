import React from "react";
import Form from "../../../components/form/form";
import Enzyme, { mount, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import renderer from "react-test-renderer";
Enzyme.configure({ adapter: new Adapter() });

describe("<Form />", () => {
  it("is alive on start", () => {
    let app = shallow(<Form />);
    expect(app.find("form").exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
