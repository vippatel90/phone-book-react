import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./App";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("renders App", () => {
  expect(wrapper.length).toEqual(1);
});
