import { combineReducers } from "redux-immutable";
import { connectRouter } from "connected-react-router/immutable";
import home from "../components/content/home/reducers";
import payload from "../components/content/payloads/reducers";

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    home,
    payload
  });

export default rootReducer;
