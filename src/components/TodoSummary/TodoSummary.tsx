import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  strDateCreated: string;
  strDateToCompleteBy: string;
  bCompleted: boolean;
  strTitle: string;
  strDescription: string;
  strId: string;
};
const TodoSummary: React.FC<Props> = ({
  classes,
  strDateCreated,
  strDateToCompleteBy,
  strDescription,
  strTitle,
  bCompleted,
  strId,
}) => {
  return (
    <Card className={classes.todoSummary}>
      <Link to={`/todos/${strId}`}>
        <CardContent>
          <Typography variant="h5">{strTitle}</Typography>
          <Typography variant="subtitle1">{strDescription}</Typography>
          <Typography variant="subtitle2">
            Created on: {strDateCreated}
          </Typography>
          <Typography variant="subtitle2">
            {bCompleted
              ? `Completed`
              : `To complete by: ${strDateToCompleteBy}`}
          </Typography>
        </CardContent>
      </Link>
    </Card>
  );
};

export default withStyles(style)(TodoSummary);
