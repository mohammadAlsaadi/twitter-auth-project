import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TwitterLoginButton from "./components/TwitterLoginButton";
import TwitterCallback from "./components/TwitterCallback";
import Home from "./components/Home";

const App = () => (
  <Router>
    <Switch>
      <Route path="/twitter-callback" component={TwitterCallback} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>
);

export default App;
