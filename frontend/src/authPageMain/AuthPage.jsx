import React from "react";

const AuthPage = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-ga ">
      <div className="grid items-center w-2/4 grid-cols-2 bg-white rounded-lg p-7">
        <div className="p-8 bg-gray-300 rounded-full max-w-[200px] max-h-[200px] ">
          <img
            className="object-cover w-full select-none "
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
