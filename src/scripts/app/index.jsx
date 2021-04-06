import React, { Component, lazy, Suspense } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactNotifications from "react-notifications-component";
import { ThemeProvider } from "@material-ui/core";
import spaceXTheme from "./theme";
import { connect } from "react-redux";
import LoadingIndicator from "../components/generic/loadingIndicator";

const Content = lazy(() => import("../components/content"));

class App extends Component {
  render() {
    return (
      <>
        <ReactNotifications />
        <ThemeProvider theme={spaceXTheme}>
          <CssBaseline />
          <div>
            <h2 className="header-style">{"Space X"}</h2>
            <Suspense fallback={<LoadingIndicator />}>
              <Content />
            </Suspense>
          </div>
        </ThemeProvider>
      </>
    );
  }
}

const mapStateToProps = () => {};

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
