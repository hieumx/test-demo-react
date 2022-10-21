import React, { useEffect, useState } from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfor extends React.Component {
// constructor(props) {
//   console.log(">>> call constructor: 1");
//   super(props);
//   //babel complier
//   this.state = {
//     isShowListUser: true,
//   };
// }
// componentDidMount() {
//   console.log(">>> call me component did mount");
//   setTimeout(() => {
//     document.title = "Hieumx &amp Hoi dan It";
//   }, 3000);
// }
// componentDidUpdate(prevProps, prevState, snapshot) {
//   console.log(">>> call me component did update", this.props, prevProps);
//   if (this.props.listUsers !== prevProps.listUsers) {
//     if (this.props.listUsers.length === 5) {
//       alert("you got 5 users");
//     }
//   }
// }
// handleShowHide = () => {
//   this.setState({
//     isShowListUser: !this.state.isShowListUser,
//   });
// };
// render() {
//   console.log(">>> call me render");
//   //destruct array/object
//   const { listUsers } = this.props;
//   //props => viet tat cua properties
//   //templae + logic js
//   return (
//     <div className="display-infor-container">
//       <img src={logo} />
//       <div>
//         <span
//           onClick={() => {
//             this.handleShowHide();
//           }}
//         >
//           {this.state.isShowListUser === true
//             ? "Hide list users:"
//             : "Show list users:"}
//         </span>
//       </div>
//       {this.state.isShowListUser && (
//         <div>
//           {listUsers.map((user, index) => {
//             return (
//               <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
//                 <div>
//                   <div>My name's {user.name}</div>
//                   <div>My age's {user.age}</div>
//                   <hr />
//                 </div>
//                 <div>
//                   <button
//                     onClick={() => this.props.handleDeleteUser(user.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </div>
//   );
// }
const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowHideListUser, setShowHideListUser] = useState(true);
  // this.state = {
  //   isShowHideListUser: true,
  // };
  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };
  useEffect(() => {});
  return (
    <div className="display-infor-contrainer">
      <div>
        <span onClick={() => handleShowHideListUser()}>
          {isShowHideListUser === true ? "Hide list users" : "Show list users"}
        </span>
      </div>
      {isShowHideListUser && (
        <div>
          {listUsers.map((user, index) => {
            return (
              <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                <div>
                  <div> My name's {user.name}</div>
                  <div>My age's {user.age}</div>
                </div>
                <div>
                  <button onClick={() => props.handleDeleteUsers(user.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfor;
