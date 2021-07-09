import "./App.css";
import { useState, useEffect } from "react";
import React from "react";
import FormCard from "./components/FormCard/FormCard";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <FormCard />
    </div>
  );
}

export default App;
