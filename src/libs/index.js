import jwt from 'jsonwebtoken';
const secret = "masteringstudy2021durjoytalukdarNaim";
const baseUrl = 'http://localhost:5050';

const auth = () => {
    let token = window.localStorage.getItem("secretToken");
    let verified;
    if (token) verified = jwt.verify(token, secret);
    return verified;
}

const currentUser = () => {
  let token = window.localStorage.getItem("secretToken");
  let currentUser = jwt.decode(token);
  return currentUser;
}

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default {
    secret,
    baseUrl,
    auth,
    validateEmail,
    currentUser
}