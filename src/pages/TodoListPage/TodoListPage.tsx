import React from "react";
import { Typography } from "@material-ui/core";
//components:
import TodoList from "../../components/TodoList";

const TodoListPage = () => {
  return (
    <>
      <Typography variant="h2" align="center">
        My TODO list
      </Typography>
      <TodoList />
    </>
  );
};

export default TodoListPage;
