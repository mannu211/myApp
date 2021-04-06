import { fromJS } from "immutable";
import { SET_DATA, SET_FILTER_DATA } from "./actions";

const initialState = fromJS({
  data: [],
  filterData: [],
});

const home = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return state.set("data", [...action.data]);
    case SET_FILTER_DATA:
      return state.set("filterData", [...action.filterData]);
    default:
      return state;
  }
};

export default home;
