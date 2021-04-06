import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { createStyles, withStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
import RouteWithSubRoutes from "../generic/subRoutes";
import LoadingIndicator from "../generic/loadingIndicator";
import { connect } from "react-redux";
import { routes } from "./mainRoutes";

const styles = (theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: 350,
      margin: "0 auto",
    },
  });

class RouteConfig extends Component {
  state = { value: "history" };

  componentWillMount() {
    this.props.history.replace("/history");
  }

  handleCallToRouter = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    const { value } = this.state;
    const { progressLoader} = this.props;
    return (
      <div className="app-content">
        {progressLoader && <LoadingIndicator />}
        <Router>
          <Paper className="primary-tab-paper" square>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="primary"
              onChange={this.handleCallToRouter.bind(value)}
              centered
            >
              <Tab
                label="History"
                className="minWidth90"
                value="history"
                to="/history"
                component={Link}
              />
              <Tab
                label="Payload"
                className="minWidth90"
                value="payload"
                to="/payload"
                component={Link}
              />
            </Tabs>
          </Paper>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = () => {};

const RouteConfigStyle = withStyles(styles)(RouteConfig);
export default connect(mapStateToProps, null)(withRouter(RouteConfigStyle));
