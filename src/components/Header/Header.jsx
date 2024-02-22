import React, { useState } from "react";
import "./header.scss";

import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import logo from "./../../images/logo.png";
import { NavLink, Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState();

  const activeLink = "nav__link nav__link-active";
  const normalLink = "nav__link";

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__row">
          <div className="header__logo">
            <NavLink to="/">
              <img src={logo} alt="logo" className="header__img" />
            </NavLink>
          </div>
          <nav className={`header__nav ${isOpen ? "active" : ""}`}>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contacts"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={closeMenu}
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
            <div className="header__icons">
              <Link to="/">
              <FaTwitter />
              </Link>
              <Link to="/">
                <FaLinkedinIn />
              </Link>
              <Link
                to="https://www.facebook.com/profile.php?id=100005211101971"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
              <Link to="https://www.instagram.com/stvs.izbvsh/" target="_blank">
                <FaInstagram />
              </Link>
            </div>
          </nav>
          <BurgerMenu isActive={isOpen} onClick={() => setIsOpen(!isOpen)}/>
        </div>
      </div>
    </div>
  );
};

export default Header;
