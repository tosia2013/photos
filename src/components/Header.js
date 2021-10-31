import React from "react";
import HeaderButton from "./header/HeaderButton";
import NavigationBar from "./header/NavigationBar";
import SocialNavigation from "./header/SocialNavigation";

const Header = () => (
  <>
    <h1>Studio</h1>
    <NavigationBar />
    <HeaderButton />
    <SocialNavigation />
  </>
);

export default Header;
