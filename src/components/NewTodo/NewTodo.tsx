import React from "react";
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import {
  FormControl,
  TextField,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { NewTodoModel } from "../../models/newTodoModel/newTodoModel";
import useForm from "./useForm";
import { createTodo } from "../../redux/actions/todo/actions";
// styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
} & RouteComponentProps;

const NewTodo: React.FC<Props> = ({ classes, history }) => {
  const dispatch = useDispatch();
  const { objTodo, handleChange, handleSubmit, resetFormState } = useForm();
  const navigateToPage = () => history.push("/todos");
  const funcCreateNewTodo = () => dispatch(createTodo(objTodo, navigateToPage));

  return (
    <Card
      component="form"
      onSubmit={handleSubmit(funcCreateNewTodo)}
      className={classes.newTodo}
    >
      <Typography variant="h5">Create new todo:</Typography>
      <CardContent>
        <FormControl className={classes.newTodo__form}>
          <TextField
            type="text"
            label="Title"
            name={NewTodoModel.STR_TITLE}
            className={classes.newTodo__form__inputField}
            value={objTodo.title}
            onChange={handleChange}
          />
          <TextField
            type="textarea"
            label="Description"
            name={NewTodoModel.STR_DESCRIPTION}
            className={classes.newTodo__form__inputField}
            value={objTodo.description}
            onChange={handleChange}
          />
          <TextField
            type="date"
            label="Date to complete by"
            name={NewTodoModel.STR_DATE_TO_COMPLETE_BY}
            className={classes.newTodo__form__inputField}
            value={objTodo.date_to_complete_by}
            onChange={handleChange}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button type="button" onClick={resetFormState} variant="outlined">
          Reset
        </Button>
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(style)(withRouter(NewTodo));
