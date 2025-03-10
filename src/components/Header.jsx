import React from "react";
import logo from "../../public/central-texas-fly-fishing-logo.png";
import { mainNav } from "../assets/navLinksData";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-navbar-container">
      <div className="header-logo">
        <img src={logo} className="logo-img" />
        <span className="logo-text">Central Texas Fly Fishing</span>
      </div>
      <nav className="nav-bar">
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon" />
        </label>
        <ul>
          {mainNav.map((elem, index) => (
            <li key={elem.url}>
              <Link to={elem.url} className={index === 0 ? `selected` : ``}>
                {elem.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
