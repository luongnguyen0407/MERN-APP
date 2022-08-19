import React from "react";

const Heading = ({ children, className = "" }) => {
  return (
    <h2 className={`text-xl font-bold text-center ${className}`}>{children}</h2>
  );
};

export default Heading;
