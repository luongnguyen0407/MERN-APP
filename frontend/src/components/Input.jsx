import React from "react";

const Input = ({ type = "text", placeholder = "" }) => {
  return (
    <input
      placeholder={placeholder}
      className="w-full p-2 border border-blue-300 rounded-full outline-none"
      type={type}
    ></input>
  );
};

export default Input;
