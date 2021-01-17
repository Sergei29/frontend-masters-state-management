import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  FormControl,
  TextField,
  Button,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import { TodoType, NewTodoType } from "../types/types";
import { NewTodoModel } from "../../models/newTodoModel/newTodoModel";

// styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  funcOnSubmit: (...args: any) => (objEvent: React.FormEvent<Element>) => void;
  funcOnChange: (
    objEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  funcOnReset: () => void;
  objTodo: TodoType | NewTodoType;
  title: string;
};

const TodoForm: React.FC<Props> = ({
  classes,
  funcOnChange,
  funcOnReset,
  funcOnSubmit,
  objTodo,
  title,
}) => {
  return (
    <Card
      component="form"
      onSubmit={funcOnSubmit()}
      className={classes.todoForm}
    >
      <Typography variant="h5">{title}</Typography>
      <CardContent>
        <FormControl className={classes.todoForm__form}>
          <TextField
            type="text"
            label="Title"
            name={NewTodoModel.STR_TITLE}
            className={classes.todoForm__form__inputField}
            value={objTodo.title}
            onChange={funcOnChange}
          />
          <TextField
            type="textarea"
            label="Description"
            name={NewTodoModel.STR_DESCRIPTION}
            className={classes.todoForm__form__inputField}
            value={objTodo.description}
            onChange={funcOnChange}
          />
          <TextField
            type="date"
            label="Date to complete by"
            name={NewTodoModel.STR_DATE_TO_COMPLETE_BY}
            className={classes.todoForm__form__inputField}
            value={objTodo.date_to_complete_by}
            onChange={funcOnChange}
          />
        </FormControl>
      </CardContent>
      <CardActions>
        <Button type="button" onClick={funcOnReset} variant="outlined">
          Reset
        </Button>
        <Button type="submit" color="primary" variant="contained">
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default withStyles(style)(TodoForm);
