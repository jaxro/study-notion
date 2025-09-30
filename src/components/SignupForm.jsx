import React, { useState } from "react";
import {AiOutlineEye,AiOutlineEyeInvisible} from "react-icons/ai"
import {toast} from "react-hot-toast"
import { useNavigate } from "react-router-dom";
const SignupForm = ({setIsLoggedIn}) => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
const [showPasswordCNF, setShowPasswordCNF] = useState(false);
  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }
  function submitHandler(event){
    event.preventDefault();
    if(formData.password!=formData.confirmPassword){
      toast.error("Password do not Match")
      return;
    }
    setIsLoggedIn(true)
    toast.success("Account Created")
    const accountData={
      ...formData
    };
    console.log("printing acctount data")
    console.log(accountData);
    navigate("/dashboard")
  }
  return (
    <div>
      {/* student instructor tab */}
      <div>
        <button>student</button>
        <button>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        {/**first name and last name */}
        <div>
          <label>
            <p>
              First Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="firstname"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstname}
            />
          </label>
          <label>
            <p>
              Last Name<sup>*</sup>
            </p>
            <input
              required
              type="text"
              name="lastname"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastname}
            />
          </label>
        </div>
        {/**email */}
        <label>
          <p>
            Email Address<sup>*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address"
            value={formData.email}
          />
        </label>
        {/**passowrd and confirm password */}
        <div>
          <label>
            <p>
              Create Password<sup>*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
          </label>
           <label>
            <p>
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showPasswordCNF ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span onClick={() => setShowPasswordCNF((prev) => !prev)}>
              {showPasswordCNF ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}
            </span>
          </label>
        </div>
        <button>Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
