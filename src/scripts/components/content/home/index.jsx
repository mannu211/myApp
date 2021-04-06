import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import * as selectors from "./selectors";
import * as actions from "./actions";
import Card from "./contents/Cards";
import { Paper } from "@material-ui/core";
import { Search } from "@material-ui/icons";

class Home extends React.Component {
  componentDidMount() {
    this.props.loadData({});
  }
  filter = (evt) => {
    if (evt.target.value) {
      this.props.setFilterData(
        this.props.filterData.filter((obj) =>
          obj.title.toLowerCase().includes(evt.target.value.toLowerCase())
        )
      );
    } else {
      this.props.setFilterData(this.props.data);
    }
  };
  render() {
    const { filterData } = this.props;
    return (
      <Paper>
        <div style={{ width: "100%" }}>
          <input
            type={"text"}
            onChange={(evt) => this.filter(evt)}
            placeholder={"Filter By Name"}
            className="inputBox"
          ></input>
          <Search className="searchIcon" />
        </div>

        <div style={{ display: "grid" }}>
          {filterData &&
            filterData.length > 0 &&
            filterData.map((obj, index) => {
              return (
                <div
                  style={{
                    gridRow: index / 4 + 1,
                    gridColumn: (index % 4) + 1,
                    margin: "2px",
                  }}
                >
                  <Card dataObj={obj} />
                </div>
              );
            })}
        </div>
      </Paper>
    );
  }
}
const mapStateToProps = () =>
  createStructuredSelector({
    data: selectors.getData(),
    filterData: selectors.getFilterData(),
  });

const mapDispatchToProps = (dispatch) => ({
  loadData: (params) => dispatch(actions.loadData(params)),
  setFilterData: (data) => dispatch(actions.setFilterData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
