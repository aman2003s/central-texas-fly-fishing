import React from "react";
import logo from "/central-texas-fly-fishing-logo.png";
import { footerNav } from "../assets/navLinksData";
import { Link } from "react-router-dom";
import socialIcon from "/social-icons.png";
import socialIcon1 from "/social-icons-1.png";
import socialIcon2 from "/social-icons-2.png";

const Footer = () => {
    const socialLinks = [
        { src: socialIcon, alt: "Facebook", url: "YOUR_FACEBOOK_URL" },
        { src: socialIcon1, alt: "Twitter", url: "YOUR_TWITTER_URL" },
        { src: socialIcon2, alt: "Instagram", url: "YOUR_INSTAGRAM_URL" },
    ];

    return (
        <div className="footer-container">
            <div className="footer-internal-container">
                <div className="footer-cols">
                    <div className="header-logo">
                        <img src={logo} className="logo-img" alt="Central Texas Fly Fishing Logo" />
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
                    {socialLinks.map((social, index) => (
                        <Link key={index} to={social.url} aria-label={social.alt}>
                            <img src={social.src} alt={social.alt} />
                        </Link>
                    ))}
                </div>
            </div>
            <p className="copyright-text">
                &copy; {new Date().getFullYear()} Central Texas Fly Fishing All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;