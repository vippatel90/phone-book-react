import React from "react";
import ReactDOM from "react-dom";
import jest from "jest-mock";
import { shallow } from "enzyme";
import { Form } from "react-redux-form";
import { addPhone } from "../actions/phone";

import { AddPhoneForm } from "./AddPhone";

let wrapper;

beforeEach(() => {
  const phoneForm = { id: "1", firstName: "vips", number: "1111" };
  wrapper = shallow(<AddPhoneForm phoneForm={phoneForm} />);
});

it("Phonelist should render", () => {
  expect(wrapper.length).toEqual(1);
});
it("edit button should call dispatched editPhone fun", () => {
  const spyOnSubmit = jest.spyOn(wrapper.instance(), "handleSubmit");
  spyOnSubmit.mockImplementation();
  wrapper.instance().forceUpdate();
  wrapper.update();
  wrapper.find(Form).simulate("submit");
  expect(spyOnSubmit).toHaveBeenCalled();
  spyOnSubmit.mockRestore();
});
