import { createSelector } from "reselect";
import * as selectors from "../../../redux/selectors";

export const getPayloadData = () =>
  createSelector(selectors.payloadState, (payloadState) =>
  payloadState.get("payloadData")
  );

export const getPayloadFilterData = () =>
  createSelector(selectors.payloadState, (payloadState) =>
  payloadState.get("payloadFilterData")
  );
