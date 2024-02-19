import React from "react";

const Button = ({ variate }) => {
  return (
    <button
      type="submit"
      className="rounded-md bg-black px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      {variate === "LOGIN" ? "LOGIN" : "REGISTER"}
    </button>
  );
};

export default Button;
