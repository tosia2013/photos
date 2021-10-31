import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => (
  <nav>
    <NavLink to="/individuals">Individuals</NavLink>
    <NavLink to="/companies">Companies</NavLink>
    <NavLink to="/the_studio">The Studio</NavLink>
    <NavLink to="/about_us">About US</NavLink>
    <NavLink to="/blog">Blog</NavLink>
  </nav>
);

export default NavigationBar;
