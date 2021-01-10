import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodoList } from "../../redux/actions/todo/actions";
import { RootStateType } from "../../redux/types/types";

export const useTodoList = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(
    (state: RootStateType) => state.todo
  );

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return { loading, data, error };
};
