import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import styles from "./Loginregister.module.css";
import Libs from "../../libs/index.js";

const Registration = ({ handleClick, handleShowForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    if((email&&password) &&(password.length>=6)) {
    axios
      .post(`${Libs.baseUrl}/user/create`, data)
      .then((res) => {
        toast.success("Registration succesfull");
        if (res?.status) {
          if (res.status == 201) {
            handleClick();
            setEmail("");
            setPassword("");
          }
        }
        console.log(res);
      })
      .catch((error) => {
        if (error.response) {
          if(error.response?.status == 400) {
            toast.error("Please give a valid email");
          }
          if (error.response?.data?.error?.keyPattern?.email) {
            toast.error("Email already taken!!!");
          }
        }
      });
    }
    else {
      toast.error("Your password should be at least 6 characters");
    }
  };

  return (
    <>
      <div className={styles.cardfront}>
        <h2>Register Form</h2>
        <form className="loginform">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            className={styles.inputbox}
            value={email}
            placeholder="Email Address"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            className={styles.inputbox}
            value={password}
            placeholder="Password"
            required
          />
          <button onClick={registerHandler} className={styles.submitbtn}>
            Register
          </button>
          <input type="checkbox" /> <span>Remember Me</span>
        </form>
        <button type="button" className="btn" onClick={() => handleClick()}>
          Already Registered ?{" "}
        </button>
        <button
          style={{ border: "none", marginTop: "-5px" }}
          onClick={() => handleShowForgotPassword()}
        >
          Forget Password
        </button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Registration;
