// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import UserService from "./UserService";
// import classNames from "classnames";

// export default function LoginForm({ onLogin }) { // ‚±‚±‚Å onLogin ‚ðŽó‚¯Žæ‚é
//   const navigate = useNavigate();
//   const [active, setActive] = useState("login");

//   const [users, setUsers] = useState([]);
//   useEffect(() => {
//     UserService.getUsers().then((res) => {
//       setUsers(res.data);
//     });
//   }, []);

//   const [loginEmail, setLoginEmail] = useState("");
//   const loginEmailChangeHandler = (e) => {
//     setLoginEmail(e.target.value);
//   };

//   const [loginPassword, setLoginPassword] = useState("");
//   const loginPasswordChangeHandler = (e) => {
//     setLoginPassword(e.target.value);
//   };

//   const [email, setEmail] = useState("");
//   const emailChangeHandler = (e) => {
//     setEmail(e.target.value);
//   };

//   const [name, setName] = useState("");
//   const nameChangeHandler = (e) => {
//     setName(e.target.value);
//   };

//   const [password, setPassword] = useState("");
//   const passwordChangeHandler = (e) => {
//     setPassword(e.target.value);
//   };

//   const loginCheck = (e) => {
//     e.preventDefault();
//     let isSuccess = false;
//     let loginUser = null;
//     users.forEach((user) => {
//       if (user.email === loginEmail && user.password === loginPassword) {
//         isSuccess = true;
//         loginUser = user;
//       }
//     });
//     if (isSuccess) {
//       window.localStorage.setItem("loginUser", loginUser.name);
//       onLogin(); // ƒƒOƒCƒ“¬Œ÷Žž‚É onLogin ‚ðŒÄ‚Ño‚·
//       navigate("/home");
//     } else {
//       alert("login failure");
//     }
//   };

//   const registUser = (e) => {
//     e.preventDefault();
//     let user = { name: name, email: email, password: password };
//     UserService.createUser(user).then((res) => {
//       navigate("/home");
//     });
//   };

//   return (
//     <div className="row justify-content-center">
//       <div className="col-6">
//         {/* toggle */}
//         <ul
//           className="nav nav-pills nav-justified mb-3"
//           id="ex1"
//           role="tablist"
//         >
//           <li className="nav-item" role="presentation">
//             <button
//               className={classNames(
//                 "nav-link",
//                 active === "login" ? "active" : ""
//               )}
//               id="tab-login"
//               onClick={() => setActive("login")}
//             >
//               Login
//             </button>
//           </li>
//           <li className="nav-item" role="presentation">
//             <button
//               className={classNames(
//                 "nav-link",
//                 active === "register" ? "active" : ""
//               )}
//               id="tab-register"
//               onClick={() => setActive("register")}
//             >
//               Register
//             </button>
//           </li>
//         </ul>
//         {/* toggle */}

//         {/* login active */}
//         <div className="tab-content">
//           <div
//             className={classNames(
//               "tab-pane",
//               "fade",
//               active === "login" ? "show active" : ""
//             )}
//             id="pills-login"
//           >
//             <form onSubmit={loginCheck}>
//               <div className="form-group">
//                 <label>Email:</label>
//                 <input
//                   placeholder="Email"
//                   name="loginEmail"
//                   className="form-control"
//                   value={loginEmail}
//                   onChange={loginEmailChangeHandler}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password:</label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="loginPassword"
//                   className="form-control"
//                   value={loginPassword}
//                   onChange={loginPasswordChangeHandler}
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//         {/* login active */}

//         {/* register active */}
//         <div className="tab-content">
//           <div
//             className={classNames(
//               "tab-pane",
//               "fade",
//               active === "register" ? "show active" : ""
//             )}
//             id="pills-register"
//           >
//             <form onSubmit={registUser}>
//               <div className="form-group">
//                 <label>Email:</label>
//                 <input
//                   placeholder="Email"
//                   name="email"
//                   className="form-control"
//                   value={email}
//                   onChange={emailChangeHandler}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Name:</label>
//                 <input
//                   placeholder="Name"
//                   name="name"
//                   className="form-control"
//                   value={name}
//                   onChange={nameChangeHandler}
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label>Password:</label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   name="password"
//                   className="form-control"
//                   value={password}
//                   onChange={passwordChangeHandler}
//                   required
//                 />
//               </div>

//               <button type="submit" className="btn btn-primary">
//                 Register
//               </button>
//             </form>
//           </div>
//         </div>
//         {/* register active */}
//       </div>
//     </div>
//   );
// }
