import { useState, useEffect, useRef } from "react";
type StateType = any;
type CallbackType = (currentState: any, ...rest: any) => void;

/**
 * @description custom hook, set state with callback
 * @param {any} mixedInitialState initial state
 * @returns {[any, Function]} tuple [state, setState]
 */
const useStateWithCallback = (mixedInitialState: StateType = null) => {
  const [state, setState] = useState(mixedInitialState);
  const objCallbacksQueue = useRef<CallbackType[]>([]);

  /**
   * @description set state with callback
   * @param {any} mixedNewState new state
   * @param {Function | undefined} funcCallback callback (optional)
   * @returns {undefined} sets state, saves callback
   */
  const setStateWithCallback = (
    mixedNewState: StateType,
    funcCallback?: CallbackType
  ) => {
    setState(() => mixedNewState);
    if (funcCallback) {
      objCallbacksQueue.current.push(funcCallback);
    }
  };

  /**
   * @description invokes callback on state change, than clears the calllback(s)
   */
  useEffect(() => {
    objCallbacksQueue.current.forEach((funcSavedCallback) =>
      funcSavedCallback(state)
    );

    objCallbacksQueue.current = [];
  }, [state]);

  return [state, setStateWithCallback];
};

export default useStateWithCallback;
