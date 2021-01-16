import React, { useState } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useTodoById } from "./useTodoById";
//components:
import TodoEditModal from "./components/TodoEditModal";

//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
} & RouteComponentProps;

const TodoDetails: React.FC<Props> = ({ classes, match }) => {
  const [bEditModal, setBEditModal] = useState<boolean>(false);
  const funcOpenEditMOdal = () => setBEditModal(true);
  const funcCloseEditModal = () => setBEditModal(false);

  const { current, loading, error } = useTodoById((match.params as any).id);

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
      <CardActions className={classes.todoDetails__actions}>
        <IconButton aria-label="edit" onClick={funcOpenEditMOdal}>
          <EditIcon />
        </IconButton>
      </CardActions>
      {current && (
        <TodoEditModal
          objTodoData={current}
          handleClose={funcCloseEditModal}
          bModalOpen={bEditModal}
        />
      )}
    </Card>
  );
};

export default withStyles(style)(withRouter(TodoDetails));
