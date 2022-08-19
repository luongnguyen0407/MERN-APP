import React from "react";

const Button = ({ children, full }) => {
  return (
    <button
      className={`${
        full ? "w-full" : ""
      } p-2 my-3 rounded-full bg-green-300 text-white font-semibold`}
    >
      {children}
    </button>
  );
};

export default Button;
