import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>{-1.5 |> Math.abs |> Math.round}</p>
    </div>
  );
}

export default App;
