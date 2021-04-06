import { fromJS } from "immutable";
import { SET_PAYLOAD_DATA, SET_PAYLOAD_FILTER_DATA } from "./actions";

const initialState = fromJS({
  payloadData: [],
  payloadFilterData: [],
});

const payload = (state = initialState, action) => {
  switch (action.type) {
    case SET_PAYLOAD_DATA:
      return state.set("payloadData", [...action.payloadData]);
    case SET_PAYLOAD_FILTER_DATA:
      return state.set("payloadFilterData", [...action.payloadFilterData]);
    default:
      return state;
  }
};

export default payload;
