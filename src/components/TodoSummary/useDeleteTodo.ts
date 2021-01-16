import { useDispatch } from "react-redux";
import { deleteTodoById } from "../../redux/actions/todo/actions";

export const useDeleteTodo = (strTodoId: string) => {
  const dispatch = useDispatch();

  const deleteTodo = () => {
    const bConfirm = window.confirm(
      "Are you sure you want to delete this TODO ?"
    );
    if (bConfirm) {
      dispatch(deleteTodoById(strTodoId));
    }
  };

  return {
    deleteTodo,
  };
};
