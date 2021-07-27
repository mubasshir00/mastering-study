import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import styles from "./Loginregister.module.css";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";

const Loginregister = () => {
  const [rotate, setRotate] = useState(true);
  const handleClick = () => setRotate(!rotate);

  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const handleShowForgotPassword = () => setShowForgotPassword(!showForgotPassword);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.card}>
          {/* <div
            className={
              rotate
                ? `${styles.innerbox} ${styles.innerboxrotate0}`
                : `${styles.innerbox} ${styles.innerboxrotate180}`
            }
            id={styles.card}
          > */}
          {showForgotPassword ? (
            <ForgotPassword
              handleShowForgotPassword={handleShowForgotPassword}
            />
          ) : rotate ? (
            <Login
              handleClick={handleClick}
              handleShowForgotPassword={handleShowForgotPassword}
            />
          ) : (
            <Registration
              handleClick={handleClick}
              handleShowForgotPassword={handleShowForgotPassword}
            />
          )}

          {/* </div> */}
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Loginregister;
