import React from "react";

const AuthPage = ({ children }) => {
  return (
    <div className="bg-ga h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg grid grid-cols-2 w-2/4 p-7 ">
        <div className="p-8 bg-gray-300 rounded-full max-w-[200px] max-h-[200px] ">
          <img
            className=" w-full object-cover select-none"
            src="/imglog.png"
            alt=""
          />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthPage;
