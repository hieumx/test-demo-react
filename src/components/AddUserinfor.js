import React from "react";

class AddUserInfor extends React.Component {
  state = {
    name: "",
    address: "02 le quy don",
    age: "",
  };
  // handleClick(event){
  //     console.log(">>> click me my button");

  //     //merge State => react class
  //     this.setState({
  //         name: 'MapDaiKa',
  //         age: Math.floor((Math.random()*100) + 1)
  //     })
  // }

  // handleOnMoverOver(event) {
  //     console.log(event.pageX)
  // }

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address} and I'm{" "}
        {this.state.age}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
        <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label htmlFor="">Your Name:</label>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />
          <label htmlFor="">Your Age:</label>
          <input
            value={this.state.age}
            type="text"
            onChange={(event) => this.handleOnChangeAge(event)}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddUserInfor;
