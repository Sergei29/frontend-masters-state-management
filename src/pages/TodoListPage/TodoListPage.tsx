import React from "react";
import { Typography } from "@material-ui/core";
//components:
import TodoList from "../../components/TodoList";

const TodoListPage = () => {
  return (
    <div>
      <Typography variant="h2" align="center">
        TodoList Page
      </Typography>
      <TodoList />
    </div>
  );
};

export default TodoListPage;
