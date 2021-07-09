import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import FormCard from "./components/FormCard/FormCard";
import Home from "./components/HomePage/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
