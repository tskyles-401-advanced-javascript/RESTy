import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import renderer from "react-test-renderer";
import History from '../../../components/history/history';

Enzyme.configure({ adapter: new Adapter() });

describe("< />", () => {
  xit("is alive on start", () => {
    let app = shallow(<History />);
    expect(app.find("#historyList").exists()).toBeTruthy();
  });

  xit("renders correctly", () => {
    const tree = renderer.create(<History />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});