import React from "react";
import { Typography } from "@material-ui/core";
//components:
import TodoDetails from "../../components/TodoDetails";

const TodoDetailsPage = () => {
  return (
    <div>
      <Typography variant="h2">Todo details</Typography>

      <TodoDetails />
    </div>
  );
};

export default TodoDetailsPage;
