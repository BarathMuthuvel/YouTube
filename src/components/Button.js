import React from "react";

const Button = ({name}) => {
  return (
    <div className="text-[4px] ">
      <button className="px-2 py-1 m-2 bg-gray-200 rounded-md">{name}</button>
    </div>
  );
};

export default Button;
