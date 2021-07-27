import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import styles from "./Loginregister.module.css";
import Libs from "../../libs/index.js";
import Router from "next/router";

const ForgotPassword = ({token}) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordHandler = (e) => {
    e.preventDefault();
    if (password.length >= 6 && confirmPassword.length >= 6) {
      if (password === confirmPassword) {
        const data = { newPassword: password };
        const config = { headers: { "Content-Type": "application/json" } };
        axios
          .put(`${Libs.baseUrl}/user/reset-password/${token}`, data, config)
          .then((res) => {
            toast.success("Reset link has been sent. Please check your email.");
            if (res?.status) {
              if (res.status == 200 || res.status == 204) {
               Router.push('/my-account')
                //setEmail("");
              }
            }
            console.log(res);
          })
          .catch((error) => {
            if (error.response) {
                toast.error("Token not valid or expired");
                console.log(error);
            }
          });
      } else {
        toast.error("Password does not match");
      }
    } else {
      toast.error("Your password should be at least 6 characters");
    }
  };

  return (
    <>
    <div className={styles.container}>
        <div className={styles.card}>
      <div className={styles.cardfront}>
        <h2>Reset Password</h2>
        <form className="loginform">
          <label style={{ color: "#fff" }}>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className={styles.inputbox}
              value={password}
              placeholder="new password"
              required
            />
          </label>
          <label style={{ color: "#fff" }}>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              name="confirmpassword"
              className={styles.inputbox}
              value={confirmPassword}
              placeholder="confirm password"
              required
            />
          </label>
          <button onClick={resetPasswordHandler} className={styles.submitbtn}>
            Submit
          </button>
        </form>
      </div>
      </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
