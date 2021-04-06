import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import {
  LOAD_PAYLOAD_DATA,
  setPayloadData,
  setPayloadFilterData,
} from "./actions";
import * as API from "../../../services/api";
import { API_URLS } from "../../../utilities/constants";

function* payloadDataRequested({ request }) {
  try {
    const response = yield call(API.doRequest, API_URLS.spaceXPayloads);
    if (response) {
      let res=response.map(obj=>{
        obj["norad_id"]=obj["norad_id"].join(" | ");
        obj["customers"]=obj["customers"].join(" | ");
        obj["orbit_params"]=JSON.stringify(obj["orbit_params"]);
        return obj;
      })
      yield put(setPayloadData(res));
      yield put(setPayloadFilterData(res));
    }
  } catch (error) {
    console.error(error);
  }
}

function* payloadDataListener() {
  yield takeLatest(LOAD_PAYLOAD_DATA, payloadDataRequested);
}

export default function* root() {
  yield all([fork(payloadDataListener)]);
}
