import React from "react";
import HeaderTopButton from "./header/HeaderTopButton";
import NavigationBar from "./header/NavigationBar";
import SocialNavigation from "./header/SocialNavigation";
import "../style/Header.css"
import Studio_logo from "../img/Studio_logo.png"
import HeaderDownButton from "./header/HeaderDownButton";

const Header = () => (
  <>
      <header>
          <div className="header__top">
              <div className="first__chapter">
                  <img src={Studio_logo} alt="Studio" className="logo__studio"/>
                  <NavigationBar />
              </div>
              <div className="second__chapter">
                  <HeaderTopButton />
                  <SocialNavigation />
              </div>
          </div>
          <div className="photografer">
              <h1 className="Slogan"> Fast. Simple.<br/>Professional<br/>Headshots.</h1>
              <h2 className="after__slogan">#1 Rated Headshot Photographers.</h2>
              <HeaderDownButton />
          </div>
      </header>
  </>
);

export default Header;
