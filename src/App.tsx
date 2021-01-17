import React from "react";
//components:
import CounterClassComponent from "./components/CounterClassComponent";

function App() {
  return (
    <div className="App">
      <CounterClassComponent max={15} step={5} />
    </div>
  );
}

export default App;
