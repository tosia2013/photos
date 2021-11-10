import React from "react";
import { NavLink } from "react-router-dom";
import "../../style/NavigationBar.css";

const NavigationBar = () => (
  <nav className="nav__header">
    <NavLink to="/individuals" className="hederNav__link">
      Individuals
    </NavLink>
    <NavLink to="/news" className="hederNav__link">
      News
    </NavLink>
    <NavLink to="/the_studio" className="hederNav__link">
      The Studio
    </NavLink>
    <NavLink to="/about_us" className="hederNav__link">
      About US
    </NavLink>
    <NavLink to="/blog" className="hederNav__link">
      Blog
    </NavLink>
  </nav>
);

export default NavigationBar;
