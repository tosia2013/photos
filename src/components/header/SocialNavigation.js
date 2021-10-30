import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export  default function SocialNavigation() {
    return(
        <Router>
            <nav>
                <Link to="/facebook">
                    <img
                        src="/photos/src/img/Fb.png"
                        alt="feacebook"/>
                </Link>
                <Link to="/instagram">
                    <img
                        src="/photos/src/img/In.png"
                        alt="instagram"/>
                </Link>
                <Link to="/linkedIn">
                    <img
                        src="/photos/src/img/Li.png"
                        alt="linkedIn"/>
                </Link>
                <Link to="/twitter">
                    <img
                        src="/photos/src/img/Yp.png"
                        alt="twitter"/>
                </Link>
                <Link to="/google+">
                    <img
                        src="/photos/src/img/Ggle.jpg"
                        alt="google+"/>
                </Link>
            </nav>
            <Switch>
                <Route path="/facebook" />
            </Switch>
            <Switch>
                <Route path="/instagram" />
            </Switch>
            <Switch>
                <Route path="/linkedIn" />
            </Switch>
            <Switch>
                <Route path="/twitter" />
            </Switch>
            <Switch>
                <Route path="/google+" />
            </Switch>
        </Router>
    )
}