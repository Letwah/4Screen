import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/checkout">
          <img src="../assets/aeguanalogo.png"></img>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
