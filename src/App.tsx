import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import arrNavLinks from "./components/NavigationAppBar/navLinks";
//components:
import NavigationAppBar from "./components/NavigationAppBar";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFuncComponent from "./components/CounterFuncComponent";
import PaginationPage from "./pages/PaginationPage";
import NewHtmlFeaturesPage from "./pages/NewHtmlFeaturesPage";
import GrudgeListPage from "./pages/GrudgeListPage";
import StarWarsPage from "./pages/StarWarsPage";
import FormPage from "./pages/FormPage";
import SetStateWithCallbackPage from "./pages/SetStateWithCallbackPage";
import SearchAutocompletePage from "./pages/SearchAutocompletePage";
import ObservablePage from './pages/ObservablePage';
import Main from "./containers/Main";

function App() {
  return (
    <div className="App">
      <NavigationAppBar />
      <Main>
        <Container>
          <Switch>
            <Route path="/" exact component={GrudgeListPage} />
            <Route
              path={arrNavLinks[1].path}
              render={() => <CounterFuncComponent max={15} step={5} />}
            />
            <Route
              path={arrNavLinks[2].path}
              render={() => <CounterClassComponent max={15} step={5} />}
            />
            <Route path={arrNavLinks[3].path} component={PaginationPage} />
            <Route path={arrNavLinks[4].path} component={NewHtmlFeaturesPage} />
            <Route path={arrNavLinks[5].path} component={StarWarsPage} />
            <Route path={arrNavLinks[6].path} component={FormPage} />
            <Route
              path={arrNavLinks[7].path}
              component={SetStateWithCallbackPage}
            />
            <Route
              path={arrNavLinks[8].path}
              component={SearchAutocompletePage}
            />
            <Route
              path={arrNavLinks[9].path}
              component={ObservablePage}
            />
          </Switch>
        </Container>
      </Main>
    </div>
  );
}

export default App;
