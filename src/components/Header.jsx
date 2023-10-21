import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src=""></img>
          <h1>aeguana</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
