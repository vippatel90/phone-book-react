import { combineReducers } from "redux";
import phoneReducer from "./phone";
import phoneFormReducer from "./phoneForm";

export default combineReducers({
  phones: phoneReducer,
  ...phoneFormReducer
});
