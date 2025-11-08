import React, { useState } from "react";
import HeadingComp from "./HeadingComp";
import "./signup.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";



const Signup = () => {
  
  const history=useNavigate();

   const [Inputs, SetInputs]=useState({email:"",username:"",password:""});

  const change=(e)=>{
   const {name, value}=e.target;
   SetInputs({...Inputs,[name]:value})
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/api/v1/register", Inputs);
      alert(response.data.message);
  
      // reset inputs
      SetInputs({
        email: "",
        username: "",
        password: ""
      });

      history("/signin");   //  useNavigate hook used for navigation

    } catch (error) {
      // If backend sends an error with a message
      if (error.response && error.response.data) {
        alert(error.response.data.message);  // 👉 This will show "User already exists"
      } else {
        alert("Something went wrong");
      }
    }
  };
  

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 column d-flex justify-content-center align-items-center column">
            <div className="d-flex sign-box flex-column p-5  gap-4">
              <input
                className="p-2"
                type="email"
                name="email"
                placeholder="Enter your Email"
                onChange={change}
                value={Inputs.email}
              />

              <input
                className="p-2"
                type="text"
                name="username"
                placeholder="Enter Username"
                onChange={change}
                value={Inputs.username}
              />

              <input
                className="p-2"
                type="password"
                name="password"
                placeholder="Enter your Password"
                onChange={change}
                value={Inputs.password}
              />

              <button className="btn-SignUp p-2" onClick={submit}>SignUp</button>
            </div>
          </div>

          <div className="col-lg-4 d-flex justify-content-center align-items-center column col-left">
              <HeadingComp first="Sign" second="Up"/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;
