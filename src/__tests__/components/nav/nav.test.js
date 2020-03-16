import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import Nav from '../../../components/nav/nav';
Enzyme.configure({ adapter: new Adapter() });

describe("< />", () => {
  it("is alive on start", () => {
    let app = shallow(<Nav />);
    expect(app.find("nav").exists()).toBeTruthy();
  });

  xit("renders correctly", () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});