import { useDispatch } from "react-redux";
import { updateTodoById } from "../../redux/actions/todo/actions";

export const useUpdateTodo = (strTodoId: string) => {
  const dispatch = useDispatch();
  const updateTodo = (objTodoDetails: Record<string, any>) => {
    dispatch(updateTodoById({ objTodoDetails, strTodoId }));
  };

  return {
    updateTodo,
  };
};
