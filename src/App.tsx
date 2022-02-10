import React from "react";
import "./App.css";

function App() {
  const onChange = () => {};

  return (
    <div className="App">
      <button data-testid="button" onClick={onChange}>
        Button
      </button>
    </div>
  );
}

export default App;
