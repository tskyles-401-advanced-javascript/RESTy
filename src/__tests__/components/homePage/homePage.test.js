import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import HomePage from '../../../components/homePage/homePage';

Enzyme.configure({ adapter: new Adapter() });

describe("< />", () => {
  it("is alive on start", () => {
    let app = shallow(<HomePage />);
    expect(app.find("#inputs").exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});