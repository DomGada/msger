import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import FormCard from "./components/FormCard/FormCard";
import Home from "./components/HomePage/Home";
import LogIn from "./components/LogIn/LogIn";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [token, setToken] = useState(null);

  // If the token is null, a user has not logged in yet
  // Therefore they should be limited in pages they can access
  // Page gets a token after a call to the backend to verify
  // username and password, then gets token specific to the user
  if (!token) {
    console.log("No user logged in");
    return (
      <div className="App">
        <Router>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about"></Route>
            <Route path="/signup">
              <FormCard />
            </Route>
            <Route path="/login">
              <LogIn setToken={setToken} />
            </Route>
            <Route exact path="/">
              <Home token={token} setToken={setToken} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }

  console.log("User logged in");
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about"></Route>
          <Route path="/signup">
            <FormCard />
          </Route>
          <Route exact path="/">
            <Home token={token} setToken={setToken} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
