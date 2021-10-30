import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";

export  default function NavigationPhoto() {
    return(
        <Router>
            <nav>
                <NavLink to="/individuals">Individuals</NavLink>
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/the_studio">The Studio</NavLink>
                <NavLink to="/about_us">About US</NavLink>
                <NavLink to="/blog">Blog</NavLink>
            </nav>
            <Switch>
                <Route path="/individuals" />
            </Switch>
            <Switch>
                <Route path="/companies" />
            </Switch>
            <Switch>
                <Route path="/the_studio" />
            </Switch>
            <Switch>
                <Route path="/about_us" />
            </Switch>
            <Switch>
                <Route path="/blog" />
            </Switch>
        </Router>
    )
}