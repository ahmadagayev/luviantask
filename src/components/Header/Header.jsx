import React from "react";
import "./Header.css";

import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";
import HeaderBottomSection from "./HeaderBottomSection";
const Header = ({handleLogin,handleMain}) => {
  return (
    <React.Fragment>
      <header>
        <HeaderTop />
        <HeaderBottomSection handleLogin={handleLogin}  handleMain={handleMain}/>
        <HeaderBottom />
      </header>
    </React.Fragment>
  );
};

export default Header;
