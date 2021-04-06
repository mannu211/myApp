import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { LOAD_DATA, setData, setFilterData } from "./actions";
import * as API from "../../../services/api";
import { API_URLS } from "../../../utilities/constants";

function* dataRequested({ request }) {
  try {
    const response = yield call(API.doRequest, API_URLS.spaceXHistory);
    yield put(setData(response));
    yield put(setFilterData(response));
  } catch (error) {
    console.error(error);
  }
}

function* dataListener() {
  yield takeLatest(LOAD_DATA, dataRequested);
}

export default function* root() {
  yield all([fork(dataListener)]);
}
