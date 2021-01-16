import { TodoStateType } from "../../redux/types/types";
import { formatTodoByIdResponse } from "../formatTodoByIdResponse/formatTodoByIdResponse";

export const updateTodoList = (
  objUpdatedTodo: Record<string, any>,
  strTodoId: string,
  objState: TodoStateType
) => {
  const objFormattedTodo = formatTodoByIdResponse(objUpdatedTodo, strTodoId);

  return objState.data.map((objTodo) => {
    if (objTodo.id === objFormattedTodo.id) {
      return objFormattedTodo;
    }
    return objTodo;
  });
};
