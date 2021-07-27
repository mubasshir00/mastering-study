import React, { useEffect, useState } from "react";
import Payment from "../src/modules/Payment/Payment";
import Libs from "../src/libs/index.js";
import Router from "next/router";
function payment() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let verified = Libs.auth();
    if (verified) setLogged(true);
    else Router.push("/my-account");
    setLoading(false);
  }, []);
  return (
    <div>
      {loading && <h1>Loading..........</h1>}
      {logged && <Payment />}
    </div>
  );
}

export default payment;
