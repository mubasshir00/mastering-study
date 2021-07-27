import Profilecom from "../src/profile/Profilecom";
import Libs from "../src/libs/index.js";
import { useState, useEffect } from "react";
import Router from 'next/router';

function Profile() {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    //location.reload();
      if (!window.location.hash) {
          window.location = window.location + '#loaded';
          window.location.reload();
      }

    let verified = Libs.auth();
    if (verified) setLogged(true);
    else Router.push("/my-account");
    setLoading(false);
  }, []);
  return (
    <div>
      {loading && <h1>Loading..........</h1>}
      {logged && <Profilecom />}
    </div>
  );
}

export default Profile;
