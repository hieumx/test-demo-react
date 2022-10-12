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
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = [...this.state.listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  //cu phap JSX chi su dung duoc 1 khoi
  render() {
    const test = "hieumx hoi dan it";
    const test2 = { name: "hieumx", age: 35 };
    return (
      <div>
        {test}
        {JSON.stringify(test2)}
        <br />
        <div className="a">
          <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
          <br />
          <br />
          <DisplayInfor
            listUsers={this.state.listUsers}
            handleAddNewUser={this.handleAddNewUser}
            handleDeleteUser={this.handleDeleteUser}
          />
        </div>
        <div className="b"></div>
      </div>
    );
  }
}

export default MyComponent;
