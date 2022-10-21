import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = {
//     name: "",
//     address: "02 le quy don",
//     age: "",
//   };

//   handleOnChangeInput = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };
//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   handleOnSubmit = (event) => {
//     event.preventDefault();
//     this.props.handleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.address} and I'm{" "}
//         {this.state.age}
//         <button
//           onClick={(event) => {
//             this.handleClick(event);
//           }}
//         >
//           Click me
//         </button>
//         <button onMouseOver={this.handleOnMoverOver}>Hover me</button>
//         <form onSubmit={(event) => this.handleOnSubmit(event)}>
//           <label htmlFor="">Your Name:</label>
//           <input
//             value={this.state.name}
//             type="text"
//             onChange={(event) => this.handleOnChangeInput(event)}
//           />
//           <label htmlFor="">Your Age:</label>
//           <input
//             value={this.state.age}
//             type="text"
//             onChange={(event) => this.handleOnChangeAge(event)}
//           />
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }
const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("02 Le Quy Don");
  const [age, setAge] = useState("");

  const handleOnChangeInput = (event) => {
    setName(event.target.value);
  };
  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };
  return (
    <div>
      My name is {name} and I'm from {address} and I'm {age}
      <form onSubmit={(event) => handleOnSubmit(event)}>
        <label>Your Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <label>Your Age:</label>
        <input
          type="text"
          value={age}
          onChange={(event) => handleOnChangeAge(event)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
