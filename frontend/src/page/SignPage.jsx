import React from "react";
import { Link } from "react-router-dom";
import AuthPage from "../authPageMain/AuthPage";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";

const SignPage = () => {
  return (
    <AuthPage>
      <Heading className="my-3">Register</Heading>
      <form className="flex flex-col gap-y-5" action="" method="post">
        <div>
          <Input placeholder="User Name"></Input>
        </div>
        <div>
          <Input type="password" placeholder="Password"></Input>
        </div>
        <div>
          <Input type="password" placeholder="Re Password"></Input>
        </div>
        <Button>Register</Button>
      </form>
      <p>
        Bạn đã có tài khoản ?{" "}
        <Link className="text-blue-300" to={"/login"}>
          Đăng Nhập
        </Link>
      </p>
    </AuthPage>
  );
};

export default SignPage;
