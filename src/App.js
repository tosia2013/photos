import React, { Component } from 'react';
import NavigationPhoto from './components/header/NavigationPhoto'
import HeaderButton from "./components/header/HeaderButton";
import SocialNavigation from "./components/header/SocialNavigation";


class App extends Component{
    render() {
        return(
            <header>
                <h1>Studio</h1>
                <NavigationPhoto />
                <HeaderButton />
                <SocialNavigation />
            </header>
        )
    }
}

export default App