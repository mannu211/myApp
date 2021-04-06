import React, { lazy, Suspense } from "react";
import { fromJS } from "immutable";
import { createBrowserHistory } from "history";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./scripts/redux";
import "./styles/styles.scss";
import LoadingIndicator from "./scripts/components/generic/loadingIndicator";
import { ThemeProvider } from "@material-ui/core";
import StudentClassTheme from "./theme";

const App = lazy(() => import("./scripts/app"));

const history = createBrowserHistory();
const initialState = fromJS({});
const provideStore = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={provideStore}>
    <ConnectedRouter history={history}>
      <Suspense fallback={<LoadingIndicator />}>
        <ThemeProvider theme={StudentClassTheme}>
          <App />
        </ThemeProvider>
      </Suspense>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
