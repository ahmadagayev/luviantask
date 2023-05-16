// import React, { useEffect } from "react";
// import Home from "../pages/Home/Home";
// import Login from "../pages/Login/Login";
// import AddUser from "../pages/AddUser/AddUser";
// import { Routes as ReactRoutes, Route, useNavigate } from "react-router";

// export const Routes = () => {
//   const navigate = useNavigate();
//   let userType = window.localStorage.getItem("userType");
//   let token = window.localStorage.getItem("token");
//   useEffect(() => {
//     if (!token) {
//       navigate("login");
//     }
//   }, [navigate, token]);

//   return (
//     <ReactRoutes>
//       <Route path="login" element={<Login />} />
//       {token && (
//         <React.Fragment>
//           <Route path="*" element={<Home />} />
//           {userType === "admin" && (
//             <Route path="add-user" element={<AddUser />} />
//           )}
//         </React.Fragment>
//       )}
//       {/* {token && <Route path="*" element={<Home />} />}
//       {token && userType === "admin" && (
//         <Route path="add-user" element={<AddUser />} />
//       )} */}
//     </ReactRoutes>
//   );
// };
