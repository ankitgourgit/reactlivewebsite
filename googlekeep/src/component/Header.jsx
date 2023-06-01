import React from "react";
import logo from "../Images/logo.png"

function Header() {
    return (
      <>
      <div className="header"></div>
      <img src={logo} alt="logo" width='70' heigth='50' />
      <h1>Google Keep</h1>
      </>
    );
  }
  
  export default Header;
  