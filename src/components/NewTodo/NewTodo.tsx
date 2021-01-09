import React from "react";
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
// styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
};

const NewTodo: React.FC<Props> = ({ classes }) => {
  const { objTodo, handleChange, handleSubmit, resetFormState } = useForm();

  return (
    <Card component="form" onSubmit={handleSubmit} className={classes.newTodo}>
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
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={resetFormState}>
          Reset
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(style)(NewTodo);
