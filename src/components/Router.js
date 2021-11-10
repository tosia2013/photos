import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./Header";
import about_us from "../conteiner/about_us";
import blog from "../conteiner/blog";
import news from "../conteiner/news";
import the_studio from "../conteiner/the_studio";
import individuals from "../conteiner/individuals";

export default function Routers() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/individuals" component={individuals} />
      </Switch>
      <Switch>
        <Route path="/news" component={news} />
      </Switch>
      <Switch>
        <Route path="/the_studio" component={the_studio} />
      </Switch>
      <Switch>
        <Route path="/about_us" component={about_us} />
      </Switch>
      <Switch>
        <Route path="/blog" component={blog} />
      </Switch>
      <Switch>
        <Redirect to="/individuals" />
      </Switch>
    </Router>
  );
}
