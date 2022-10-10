import React from "react";
import logo from './assets/images/my-travels-logo.png'

function Header() {
  return(
    <header className="header">
      <div className="container">
        <a href="/">
          <img src={logo} className="logo" alt="My Travels Logo" />
        </a>
      </div>
    </header>
  )
}

export default Header;