import React from "react";
import ReactDOM from "react-dom";
import jest from "jest-mock";
import { shallow } from "enzyme";
import PhoneList from "./PhoneList";

let wrapper, mockEditfn;

beforeEach(() => {
  mockEditfn = jest.fn();
  const phone = { id: "1", firstName: "vips", number: "1111" };
  wrapper = shallow(<PhoneList phones={[phone]} editPhone={mockEditfn} />);
});

it("Phonelist should render", () => {
  expect(wrapper.length).toEqual(1);
});
it("edit button should call dispatched editPhone fun", () => {
  wrapper.find(".btn").simulate("click");
  expect(mockEditfn.mock.calls.length).toBe(1);
});
