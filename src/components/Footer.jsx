import React from "react";
import logo from "../../public/central-texas-fly-fishing-logo.png";
import { footerNav } from "../assets/navLinksData";
import { Link } from "react-router-dom";
import socialIcon from "../../public/social-icons.png";
import socialIcon1 from "../../public/social-icons-1.png";
import socialIcon2 from "../../public/social-icons-2.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-internal-container">
        <div className="footer-cols">
          <div className="header-logo">
            <img src={logo} className="logo-img" />
          </div>
          <nav className="nav-bar">
            <ul>
              {footerNav.map((elem, index) => (
                <li key={elem.url}>
                  <Link to={elem.url} className={index === 0 ? `selected` : ``}>
                    {elem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="social-icons">
          <Link to="#">
            <img src={socialIcon} />
          </Link>
          <Link to="#">
            <img src={socialIcon1} />
          </Link>
          <Link to="#">
            <img src={socialIcon2} />
          </Link>{" "}
        </div>
      </div>
      <p className="copyright-text">&copy; {new Date().getFullYear()} Central Texas Fly Fishing All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
