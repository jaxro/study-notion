import React from "react";
import Template from "../components/Template";
import loginImg from "../assets/login.png"
const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills or today, tommorow and beyond"
      desc2="Eductation to future-proof your career"
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Login;
