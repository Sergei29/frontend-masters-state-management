import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Dialog } from "@material-ui/core";
import useForm from "../../../NewTodo/useForm";
import { useUpdateTodo } from "../../useUpdateTodo";
import { TodoType } from "../../../types/types";
import TodoForm from "../../../TodoForm";
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

  const funcOnSubmitCallback = () => {
    updateTodo(objTodo);
    handleClose();
  };

  const funcSubmitHandler = () => handleSubmit(funcOnSubmitCallback);

  return (
    <Dialog open={bModalOpen} onClose={handleClose}>
      <TodoForm
        objTodo={objTodo}
        funcOnChange={handleChange}
        funcOnSubmit={funcSubmitHandler}
        funcOnReset={resetFormState}
        title="The edited TODO will be overwritten."
      />
    </Dialog>
  );
};

export default withStyles(style)(TodoEditModal);
