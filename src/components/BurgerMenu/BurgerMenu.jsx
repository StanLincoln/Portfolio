import React from "react";
import './burgerMenu.scss'

const BurgerMenu = ({isActive, onClick}) => {
  return (
    <button
      onClick={() => onClick()}
      className={`header__menu ${isActive === true ? "active" : ""} ${
        isActive === false ? "unactive" : ""
      }`}
    >
      <span></span>
    </button>
  );
};

export default BurgerMenu;
