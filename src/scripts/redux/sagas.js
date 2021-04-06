import { cancel, fork, take } from "redux-saga/effects";
import Home from "../components/content/home/sagas";
import Payload from "../components/content/payloads/sagas";
const sagas = [ Home,Payload];

export const CANCEL_SAGAS_HMR = "CANCEL_SAGAS_HMR";

const createAbortableSaga = (saga: any) => {
  if (process.env.NODE_ENV === "development") {
    return function* main() {
      const sagaTask = yield fork(saga);

      yield take(CANCEL_SAGAS_HMR);
      yield cancel(sagaTask);
    };
  }
  return saga;
};

const SagaManager = {
  cancelSagas: (store: any) => {
    store.dispatch({
      type: CANCEL_SAGAS_HMR,
    });
  },
  startSagas: (sagaMiddleware: any) => {
    sagas.map(createAbortableSaga).forEach((saga) => sagaMiddleware.run(saga));
  },
};

export default SagaManager;
