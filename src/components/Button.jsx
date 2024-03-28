import React from "react";

const Button = ({ title, type = "primary", handleClick, component }) => {
  var property;
  if (type === "secondary") {
    property = "px-6 py-3 rounded-lg border-2 border-primary text-primary font-medium"
  } else if (type === "tertiary") {
    property = "px-8 py-1 text-sm text-center rounded-lg border-2 border-primary-light bg-pri-Light rounded-lg text-secondary font-medium"
  } else {
    property = "px-6 py-3 rounded-lg bg-primary text-secondary"
  }

  return (
    <div>
      <button
        onClick={() => handleClick(component)}
        className={`${property}`}
      >
        {title}
      </button>
    </div >
  );
};

export default Button;
