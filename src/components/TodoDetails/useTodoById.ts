import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoById } from "../../redux/actions/todo/actions";
import { RootStateType } from "../../redux/types/types";
import { TodoModel } from "../../models/todoModel/todoModel";

export const useTodoById = (strTodoId: string) => {
  const dispatch = useDispatch();
  const { current, loading, error } = useSelector(
    (state: RootStateType) => state.todo
  );

  useEffect(() => {
    dispatch(fetchTodoById(strTodoId));
  }, [dispatch, strTodoId]);

  return { current: current as InstanceType<typeof TodoModel>, loading, error };
};
