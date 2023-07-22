import React from "react";

import brand_logo from "./images/brand_logo.png"

function Header() {
  return (
    <div className="header">
      <div className="logo"><img src={brand_logo} alt="" /></div>
      <div className="navbar">
        <nav>
          <li>Menu</li>
          <li>Location</li>
          <li>About</li>
          <li>Contact</li>
        </nav>
      </div>
      <div className="login-btn">
        <button>login</button>
      </div>
    </div>
  );
}

export default Header;
