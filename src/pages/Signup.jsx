import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template"
const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Build skills or today, tommorow and beyond"
      desc2="Eductation to future-proof your career"
      image={signupImg}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;
