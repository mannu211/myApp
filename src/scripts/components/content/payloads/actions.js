export const SET_PAYLOAD_DATA = "SET_PAYLOAD_DATA";
export const setPayloadData = (payloadData) => ({
  type: SET_PAYLOAD_DATA,
  payloadData,
});

export const LOAD_PAYLOAD_DATA = "LOAD_PAYLOAD_DATA";
export const loadPayloadData = (request) => ({
  type: LOAD_PAYLOAD_DATA,
  request,
});

export const SET_PAYLOAD_FILTER_DATA = "SET_PAYLOAD_FILTER_DATA";
export const setPayloadFilterData = (payloadFilterData) => ({
  type: SET_PAYLOAD_FILTER_DATA,
  payloadFilterData,
});
