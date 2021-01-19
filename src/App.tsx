import React from "react";
import { Switch, Route } from "react-router-dom";
//components:
import Navigation from "./components/Navigation";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFuncComponent from "./components/CounterFuncComponent";
import GrudgeList from "./components/GrudgeList";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" exact component={GrudgeList} />
        <Route
          path="/counter-class"
          render={() => <CounterClassComponent max={15} step={5} />}
        />
        <Route
          path="/counter-functional"
          render={() => <CounterFuncComponent max={15} step={5} />}
        />
      </Switch>
    </div>
  );
}

export default App;
