import React from "react";
import AuthPage from "../authPageMain/AuthPage";
import { Link } from "react-router-dom";
import Input from "../components/Input";
import Heading from "../components/Heading";
import Button from "../components/Button";
const LoginPage = () => {
  return (
    <div>
      <AuthPage>
        <Heading className="my-3">Member Login</Heading>
        <form className="flex flex-col gap-y-5" action="" method="post">
          <div>
            <Input placeholder="User Name"></Input>
          </div>
          <div>
            <Input type="password" placeholder="Password"></Input>
          </div>
          <Button full>Login</Button>
        </form>
        <p className="text-center">
          Đăng ký{" "}
          <Link className="text-blue-300" to={"/sign"}>
            ngay
          </Link>{" "}
        </p>
      </AuthPage>
    </div>
  );
};

export default LoginPage;
