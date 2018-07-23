import React from "react";
import PropTypes from "prop-types";

const phoneList = ({ phones, editPhone }) => (
  <table className="table table-striped">
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone number</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {phones.map(phone => (
        <tr key={phone.id}>
          <td>{phone.firstName}</td>
          <td>{phone.lastName}</td>
          <td>{phone.number}</td>
          <td>
            <button
              className="btn btn-link"
              onClick={() => {
                editPhone(phone);
              }}
            >
              {" "}
              edit{" "}
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

phoneList.propTypes = {
  phones: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.isRequired,
      firstName: PropTypes.isRequired,
      lastName: PropTypes.isRequired,
      number: PropTypes.isRequired
    }).isRequired
  ).isRequired,
  editPhone: PropTypes.func.isRequired
};

export default phoneList;
