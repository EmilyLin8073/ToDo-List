import { shallow } from "enzyme";
import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

describe("App", () => {
  test("should render without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });

  test("should include header", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(".the-header").text()).toEqual("GET IT DONE");
  });
});
