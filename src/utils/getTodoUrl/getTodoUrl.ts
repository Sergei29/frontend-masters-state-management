import { TODO_API } from "../../constants/apiEndpoints";

export const getTodoListUrl = () => `${TODO_API}.json`;
export const getTodoByIdUrl = (strTodoId: string) =>
  `${TODO_API}/${strTodoId}.json`;
