import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import BodyInput from '../../../components/bodyInput/bodyInput';

Enzyme.configure({ adapter: new Adapter() });

describe("< />", () => {
  it("is alive on start", () => {
    let app = shallow(<BodyInput />);
    expect(app.find("#bodyInputContainer").exists()).toBeTruthy();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<BodyInput />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});