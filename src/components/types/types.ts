import { TodoModel } from "../../models/todoModel/todoModel";
import { NewTodoModel } from "../../models/newTodoModel/newTodoModel";

export type TodoType = InstanceType<typeof TodoModel>;
export type NewTodoType = InstanceType<typeof NewTodoModel>;
