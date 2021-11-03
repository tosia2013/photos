import React from "react";
import g_logo from "../../img/g_logo.jpg";
import fb_logo from "../../img/fb_logo.png";
import in_logo from "../../img/in_logo.png";
import li_logo from "../../img/li_logo.png";
import yp_logo from "../../img/yp_logo.png";
import "../../style/SocialNavigation.css";

const social = [
  {
    path: fb_logo,
    alt: "facebook",
  },
  {
    path: in_logo,
    alt: "instagram",
  },
  {
    path: li_logo,
    alt: "linkedin",
  },
  {
    path: yp_logo,
    alt: "socialUp",
  },
  {
    path: g_logo,
    alt: "g+",
  },
];

const SocialNavigation = () => (
  <nav className="nav__social">
    {social.map((socialLogo) => (
      <a href="#" className="social__logo">
        <img
          src={socialLogo.path}
          alt={socialLogo.alt}
          className="social__nav"
        />
      </a>
    ))}
  </nav>
);

export default SocialNavigation;
