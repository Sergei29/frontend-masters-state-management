import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import { useTodoById } from "./useTodoById";

//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
} & RouteComponentProps;

const TodoDetails: React.FC<Props> = ({ classes, match }) => {
  const { id } = match.params as any;

  const { current, loading, error } = useTodoById(id);
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
    <Card className={classes.todoDetails}>
      <CardContent>
        <Typography variant="h5">{current.title}</Typography>
        <Typography variant="subtitle1">{current.description}</Typography>
        <Typography variant="subtitle2">
          Created on: {current.date_created}
        </Typography>
        <Typography variant="subtitle2">
          {current.completed
            ? `Completed`
            : `To complete by: ${current.date_to_complete_by}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(style)(withRouter(TodoDetails));
