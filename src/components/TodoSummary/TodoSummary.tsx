import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import withStyles from "@material-ui/core/styles/withStyles";
import { useDeleteTodo } from "./useDeleteTodo";
//styles:
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
  const { deleteTodo } = useDeleteTodo(strId);

  return (
    <Card className={classes.todoSummary} square>
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
      <CardActions className={classes.todoSummary__actions}>
        <IconButton aria-label="delete" onClick={deleteTodo}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default withStyles(style)(TodoSummary);
