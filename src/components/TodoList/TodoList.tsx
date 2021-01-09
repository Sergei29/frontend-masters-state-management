import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Card, CardContent } from "@material-ui/core";
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};
const TodoList: React.FC<Props> = ({ classes }) => {
  return (
    <Card>
      <CardContent className={classes.todoList}>List</CardContent>
    </Card>
  );
};

export default withStyles(style)(TodoList);
