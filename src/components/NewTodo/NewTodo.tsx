import React from "react";
import { useDispatch } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
import useForm from "./useForm";
import { createTodo } from "../../redux/actions/todo/actions";
//components:
import TodoForm from "../TodoForm";
// styles:
import { style, ClassesType } from "./style";

type Props = {
  classes: ClassesType;
} & RouteComponentProps;

const NewTodo: React.FC<Props> = ({ classes, history }) => {
  const dispatch = useDispatch();
  const { objTodo, handleChange, handleSubmit, resetFormState } = useForm();
  const navigateToPage = () => history.push("/todos");
  const funcOnSubmit = () =>
    handleSubmit(() => dispatch(createTodo(objTodo, navigateToPage)));

  return (
    <div className={classes.newTodo}>
      <TodoForm
        title="Create new TODO"
        objTodo={objTodo}
        funcOnChange={handleChange}
        funcOnReset={resetFormState}
        funcOnSubmit={funcOnSubmit}
      />
    </div>
  );
};

export default withStyles(style)(withRouter(NewTodo));
