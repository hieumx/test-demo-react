// class component
// function compnent

import React from "react";
import DisplayInfor from "./DisplayInfor";
import AddUserInfor from "./AddUserinfor";
class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "HieuMX", age: "16" },
      { id: 2, name: "MapDaiKa", age: "26" },
      { id: 3, name: "RyanMai", age: "69" },
    ],
  };
  handleAddNewUser = (userObj) => {
    console.log(">>> check data from parent: ", userObj);
  };
  //cu phap JSX chi su dung duoc 1 khoi
  render() {
    const myInfor = ["ab", "c", "d"];
    return (
      <div>
        <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
        <br />
        <br />
        <DisplayInfor
          listUsers={this.state.listUsers}
          handleAddNewUser={this.handleAddNewUser}
        />
      </div>
    );
  }
}

export default MyComponent;
