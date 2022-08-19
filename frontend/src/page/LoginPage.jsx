import React from "react";
import AuthPage from "../authPageMain/AuthPage";
import { Link } from "react-router-dom";
const LoginPage = () => {
  return (
    <div>
      <AuthPage can="dja">
        <form action="" method="post">
          <div>
            <label htmlFor="">LoginPage</label>
            <input type="text" name="userName" />
          </div>
        </form>
        <Link to={"/sign"}>sign</Link>
      </AuthPage>
    </div>
  );
};

export default LoginPage;
