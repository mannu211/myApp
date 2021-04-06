import { createSelector } from "reselect";
import * as selectors from "../../../redux/selectors";

export const getData = () =>
  createSelector(selectors.historyState, (historyState) =>
    historyState.get("data")
  );

export const getFilterData = () =>
  createSelector(selectors.historyState, (historyState) =>
    historyState.get("filterData")
  );
