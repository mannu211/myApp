import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import DataTable from "react-data-table-component";
import * as selectors from "./selectors";
import * as actions from "./actions";
import { Paper } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import * as TableConfig from "../../../utilities/tableConfig";

class Home extends React.Component {
  componentDidMount() {
    this.props.loadPayloadData({});
  }
  filter = (evt) => {
    if (evt.target.value) {
      this.props.setPayloadFilterData(
        this.props.payloadFilterData.filter((obj) =>
          JSON.stringify(obj).toLowerCase().includes(evt.target.value.toLowerCase())
        )
      );
    } else {
      this.props.setPayloadFilterData(this.props.payloadData);
    }
  };
  render() {
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
          <DataTable
            noHeader={true}
            noTableHead={false}
            columns={[...TableConfig.payloadColumns]}
            pagination={true}
            paginationPerPage={25}
            paginationRowsPerPageOptions={[25, 50, 100, 200]}
            fixedHeader={true}
            fixedHeaderScrollHeight={"64.9vh"}
            data={this.props.payloadFilterData}
            customStyles={TableConfig.customStyles}
          />
        </div>
      </Paper>
    );
  }
}
const mapStateToProps = () =>
  createStructuredSelector({
    payloadData: selectors.getPayloadData(),
    payloadFilterData: selectors.getPayloadFilterData(),
  });

const mapDispatchToProps = (dispatch) => ({
  loadPayloadData: (params) => dispatch(actions.loadPayloadData(params)),
  setPayloadFilterData: (data) => dispatch(actions.setPayloadFilterData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
