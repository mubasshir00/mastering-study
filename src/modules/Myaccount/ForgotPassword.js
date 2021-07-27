import React from "react";
import axios from "axios";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import styles from "./Loginregister.module.css";
import spinStyles from "./Spin.module.css";
import Libs from "../../libs/index.js";

const ForgotPassword = ({ handleShowForgotPassword }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
 
  const forgotPasswordHandler = (e) => {
    e.preventDefault();
    const data = { email };
     if(Libs.validateEmail(email)) {
     setLoading(true);
    const config = { headers: { "Content-Type": "application/json" } };
    axios
      .put(`${Libs.baseUrl}/user/forgot-password`, data, config)
      .then((res) => {
        toast.success("Reset link has been sent. Please check your email.");
        if (res?.status) {
          if (res.status == 200) {
            setLoading(false)
            handleShowForgotPassword();
            //setEmail("");
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error occured", error.response);
          if (error.response?.status) {
            toast.error("Email not found!!!");
          }
        }
      });
    }
    else {
      toast.error("Please give a valid email")
    }
  };

  return (
    <>
      {loading ? (
        <div className={styles.cardfront}>
          <div className={spinStyles.loader}></div>
          <p className={spinStyles.loading}>sending...</p>
        </div>
      ) : (
        <div className={styles.cardfront}>
          <h2>Forgot Password</h2>
          <form className="loginform">
            <label style={{ color: "#fff" }}>
              Enter your email
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                className={styles.inputbox}
                value={email}
                placeholder="Email Address"
                required
              />
            </label>
            <button
              onClick={forgotPasswordHandler}
              className={styles.submitbtn}
            >
              Submit
            </button>
          </form>

          <button onClick={() => handleShowForgotPassword()}>
            Back to Login
          </button>
        </div>
      )}
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;
