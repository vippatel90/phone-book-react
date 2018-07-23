import { connect } from "react-redux";
import { editPhone } from "../actions/phone";
import PhoneList from "../components/PhoneList";

const mapStateToProps = state => ({
  phones: state.phones
});

const mapDispatchToProps = dispatch => ({
  editPhone: id => {
    dispatch(editPhone(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneList);
