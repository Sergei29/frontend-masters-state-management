import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@material-ui/core";
import { useTodoList } from "./useTodoList";
//components:
import TodoSummary from "../TodoSummary";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
} & RouteComponentProps;
const TodoList: React.FC<Props> = ({ classes, history }) => {
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

  const funcAddTodo = () => history.push("/todo_new");

  return (
    <Card>
      <CardContent className={classes.todoList}>
        {data &&
          data.length &&
          data.map((objTodo: Record<string, any>) => (
            <TodoSummary
              key={objTodo.id}
              strDateCreated={objTodo.date_created}
              strDateToCompleteBy={objTodo.date_to_complete_by}
              strDescription={objTodo.description}
              strId={objTodo.id}
              strTitle={objTodo.title}
              bCompleted={objTodo.completed}
            />
          ))}
      </CardContent>
      <CardActions>
        <Button
          onClick={funcAddTodo}
          className={classes.todoList__callToAction}
        >
          Add Todo
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(style)(withRouter(TodoList));
