import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import AuthInput from "../../../components/authInput/authInput";
Enzyme.configure({ adapter: new Adapter() });

describe("< />", () => {
  it("is alive on start", () => {
    let app = shallow(<AuthInput />);
    expect(app.find("div").exists()).toBeTruthy();
    expect(app.find("form").exists()).toBeTruthy();
    expect(app.find("#name").exists()).toBeTruthy();
    expect(app.find("#pass").exists()).toBeTruthy();

  });

  it("renders correctly", () => {
    const tree = renderer.create(<AuthInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});