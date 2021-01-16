import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  TextField,
  FormControl,
  Button,
} from "@material-ui/core";
import { NewTodoModel } from "../../../../models/newTodoModel/newTodoModel";
import useForm from "../../../NewTodo/useForm";
import { useUpdateTodo } from "../../useUpdateTodo";
import { TodoType } from "../../../types/types";
//styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
  bModalOpen: boolean;
  handleClose: () => void;
  objTodoData: TodoType;
};

const TodoEditModal: React.FC<Props> = ({
  classes,
  bModalOpen,
  handleClose,
  objTodoData,
}) => {
  const { objTodo, handleChange, handleSubmit, resetFormState } = useForm(
    objTodoData
  );
  const { updateTodo } = useUpdateTodo(objTodoData.id);

  const submitUpdateTodo = () => {
    updateTodo(objTodo);
    handleClose();
  };

  return (
    <Dialog open={bModalOpen} onClose={handleClose}>
      <DialogTitle id="form-dialog-title">Edit TODO</DialogTitle>
      <FormControl component="form" onSubmit={handleSubmit(submitUpdateTodo)}>
        <DialogContent>
          <DialogContentText>
            The edited TODO will be overwritten.
          </DialogContentText>
          <TextField
            type="text"
            label="Title"
            name={NewTodoModel.STR_TITLE}
            className={classes.form__inputField}
            value={objTodo.title}
            onChange={handleChange}
          />
          <TextField
            type="textarea"
            label="Description"
            name={NewTodoModel.STR_DESCRIPTION}
            className={classes.form__inputField}
            value={objTodo.description}
            onChange={handleChange}
          />
          <TextField
            type="date"
            label="Date to complete by"
            name={NewTodoModel.STR_DATE_TO_COMPLETE_BY}
            className={classes.form__inputField}
            value={objTodo.date_to_complete_by}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={resetFormState} color="secondary">
            Reset
          </Button>
          <Button type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </FormControl>
    </Dialog>
  );
};

export default withStyles(style)(TodoEditModal);
