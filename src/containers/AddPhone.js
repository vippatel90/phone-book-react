import React from "react";
import { connect } from "react-redux";
import { Control, Form, actions, Errors } from "react-redux-form";
import { addPhone } from "../actions/phone";

const required = val => val && val.length;
const isNumber = val => !isNaN(Number(val));

// exporting below class to test unconnected component
export class AddPhoneForm extends React.Component {
  handleSubmit(phoneForm) {
    const { dispatch } = this.props;
    dispatch(
      addPhone({
        id: phoneForm.id,
        firstName: phoneForm.firstName,
        lastName: phoneForm.lastName,
        number: phoneForm.number
      })
    );
    dispatch(actions.reset("phoneForm"));
  }

  render() {
    return (
      <Form
        model="phoneForm"
        onSubmit={phoneForm => this.handleSubmit(phoneForm)}
        validators={{
          firstName: { required },
          number: { required, isNumber }
        }}
      >
        <div className="row mb-4">
          <div className="col-sm-4">
            <label htmlFor=".firstName">First name</label>
            <Control.text
              model=".firstName"
              id=".firstName"
              className="w-100"
              validators={{ required }}
            />
            <Errors
              className="errors"
              model=".firstName"
              show="touched"
              messages={{
                required: "first name must be entered"
              }}
            />
          </div>
          <div className="col-sm-4">
            <label htmlFor=".lastName">Last name</label>
            <Control.text model=".lastName" id=".lastName" className="w-100" />
          </div>
          <div className="col-sm-4">
            <label htmlFor=".number">Number</label>
            <Control.text
              model=".number"
              id=".number"
              className="w-100"
              validators={{ required, isNumber }}
            />
            <Errors
              className="errors"
              model=".number"
              show="touched"
              messages={{
                required: "Number must be entered",
                isNumber: "Phone number must be numeric"
              }}
            />
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-sm-12 clearfix">
            <div className="float-sm-right">
              <button type="submit" className="btn btn-outline-primary">
                Save
              </button>
              <Control.reset model="phoneForm" className="btn btn-link">
                Cancel
              </Control.reset>
            </div>
          </div>
        </div>
      </Form>
    );
  }
}

export default connect(null)(AddPhoneForm);
