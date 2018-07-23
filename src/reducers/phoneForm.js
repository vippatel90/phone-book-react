import { createForms } from "react-redux-form";

const initialState = {
  firstName: "",
  lastName: "",
  number: ""
};

const phoneFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_PHONE":
      state = action.phone;
      return state;
    default:
      return state;
  }
};

export default createForms({
  phoneForm: phoneFormReducer
});
