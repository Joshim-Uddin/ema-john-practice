import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const Button = () => {
  return (
    <div>
      <Link to="/shop">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Button;
