import React from "react";
import { Switch, Route } from "react-router-dom";
// components:
import Navigation from "./components/Navigation";
import HomePage from "./pages/HomePage";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailsPage from "./pages/TodoDetailsPage";
import NewTodoPage from "./pages/NewTodoPage";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/todos" component={TodoListPage} />
        <Route path="/todos/:id" component={TodoDetailsPage} />
        <Route path="/todo_new" component={NewTodoPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
