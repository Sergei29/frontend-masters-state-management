import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
//components:
import Navigation from "./components/Navigation";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFuncComponent from "./components/CounterFuncComponent";
import PaginationPage from "./pages/PaginationPage";
import NewHtmlFeaturesPage from "./pages/NewHtmlFeaturesPage";
import GrudgeListPage from "./pages/GrudgeListPage";
import StarWarsPage from "./pages/StarWarsPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container>
        <Switch>
          <Route path="/" exact component={GrudgeListPage} />
          <Route
            path="/counter-class"
            render={() => <CounterClassComponent max={15} step={5} />}
          />
          <Route
            path="/counter-functional"
            render={() => <CounterFuncComponent max={15} step={5} />}
          />
          <Route path="/pagination" component={PaginationPage} />
          <Route path="/new-html-features" component={NewHtmlFeaturesPage} />
          <Route path="/star-wars" component={StarWarsPage} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
