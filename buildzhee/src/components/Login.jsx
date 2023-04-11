import React from "react";

import { Link } from "react-router-dom";
  
const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <button><Link to="/">Home</Link></button>
    </div>
  );
};
  
export default Login;