import React from "react";
import axios from "axios";
import jwt from "jsonwebtoken";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import styles from "./Loginregister.module.css";
import Router from "next/router";
import Libs from "../../libs/index.js";

const Login = ({ handleClick, handleShowForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    const data = { email, password };
    axios
      .post(`${Libs.baseUrl}/user/login`, data)
      .then((res) => {
        setEmail("");
        setPassword("");
        const verified = jwt.verify(res?.data.token, Libs.secret);
        window.localStorage.setItem("secretToken", res?.data.token);
        if (verified) Router.push("/profile");
      })
      .catch((error) => {
        toast.error("Wrong Credentials");
        console.log(error);
      });
  };

  return (
    <>
      {/* <div className={rotate ? 'innerbox innerboxrotate0' : 'innerbox innerboxrotate180'} id={styles.card}> */}
      <div className={styles.cardfront}>
        <h2>Login Form</h2>
        <form className="loginform">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className={styles.inputbox}
            placeholder="Email Address"
            required
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className={styles.inputbox}
            placeholder="Password"
            required
          />
          <button onClick={loginHandler} className={styles.submitbtn}>
            Login
          </button>
          <input type="checkbox" /> <span>Remember Me</span>
        </form>
        <button type="button" className="btn" onClick={() => handleClick()}>
          New Here ?{" "}
        </button>
        <button
          style={{ border: "none", marginTop: "-5px" }}
          onClick={() => handleShowForgotPassword()}
        >
          Forgot Password
        </button>
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
