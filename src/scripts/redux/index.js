import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router/immutable";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers";
import SagaManager from "./sagas";

const configureStore = (preloadedState, history) => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), sagaMiddleware)
    )
  );
  SagaManager.startSagas(sagaMiddleware);
  return store;
};

export default configureStore;
