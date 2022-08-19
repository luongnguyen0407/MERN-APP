import React from "react";
import { Link } from "react-router-dom";
import AuthPage from "../authPageMain/AuthPage";

const SignPage = () => {
  return (
    <AuthPage>
      <form action="" method="post">
        <div>
          <label htmlFor="">Sign Page</label>
          <input type="text" name="userName" />
        </div>
      </form>
      <Link to={"/login"}>sign</Link>
    </AuthPage>
  );
};

export default SignPage;
