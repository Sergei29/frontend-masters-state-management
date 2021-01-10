import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useTodoList } from "./useTodoList";
import { TodoModel } from "../../models/todoModel/todoModel";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};
const TodoList: React.FC<Props> = ({ classes }) => {
  const { loading, data, error } = useTodoList();

  if (loading)
    return (
      <Typography variant="h5" align="center">
        Loading...
      </Typography>
    );

  if (error) {
    return (
      <Typography variant="h5" align="center">
        {error}
      </Typography>
    );
  }

  return (
    <Card>
      <CardContent className={classes.todoList}>
        {data &&
          data.length &&
          data.map((objTodo: InstanceType<typeof TodoModel>) => (
            <Typography variant="h5" align="center" key={objTodo.id}>
              {objTodo.title}
            </Typography>
          ))}
      </CardContent>
    </Card>
  );
};

export default withStyles(style)(TodoList);
