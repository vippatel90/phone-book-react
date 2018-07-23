import React from "react";
import AddPhone from "../containers/AddPhone";
import PhoneList from "../containers/PhoneList";

class App extends React.Component {
  render() {
    return (
      <div className="mt-5">
        <div className="box">
          <AddPhone />
          <PhoneList />
        </div>
      </div>
    );
  }
}

export default App;
