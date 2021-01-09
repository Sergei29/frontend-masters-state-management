import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../reducers/rootReducer";

const reduxDevTools = (window as Record<string, any>)
  .__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window as Record<string, any>).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

const composeEnhancers =
  process.env.NODE_ENV === "development" ? reduxDevTools : compose;

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

export default store;
