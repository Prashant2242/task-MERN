import axios from "axios";
import React, { useState } from "react";
import HeadingComp from "./HeadingComp";

import "./signup.css";
const Signin = () => {

  const [Inputs, SetInputs]=useState({email:"",password:""});

  const change=(e)=>{
   const {name, value}=e.target;
   SetInputs({...Inputs,[name]:value})
  }

  const submit = async (e) => {
    e.preventDefault();
 
      const response = await axios.post("http://localhost:1000/api/v1/signin", Inputs);
      console.log(response.data);
  
      // reset inputs
      SetInputs({
        email: "",
        password: ""
      });

    };
  

  return (
    <div className="signup">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center align-items-center column col-left">
            <HeadingComp first="Sign" second="In" />
          </div>

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
                type="password"
                name="password"
                placeholder="Enter your Password"
                onChange={change}
                value={Inputs.password}
              />

              <button className="btn-SignUp p-2" onClick={submit}>SignIn</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
