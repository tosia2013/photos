import React from "react";
import g_logo from "../../img/g_logo.jpg";
import fb_logo from "../../img/fb_logo.png";
import in_logo from "../../img/in_logo.png";
import li_logo from "../../img/li_logo.png";
import yp_logo from "../../img/yp_logo.png";


const social = [
  {
    path: g_logo,
    alt: "g+",
  },
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
];

const SocialNavigation = () => (
  <nav>
    {social.map((socialLogo) => (
      <a href="#">
        <img src={socialLogo.path} alt={socialLogo.alt} />
      </a>
    ))}
  </nav>
);

export default SocialNavigation;
