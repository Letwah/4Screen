import React from "react";
import { Link } from "react-router-dom";

import "../styles/styles.css";

const Header = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <h1>Colette Smith</h1>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
