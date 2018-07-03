import * as MEASUREMENTS from "./constants";

export const startFetchingMeasurements = () => ({
  type: MEASUREMENTS.FETCHING_STARTED
});

export const fetchingError = () => ({
  type: MEASUREMENTS.FETCHING_ERROR
});

export const fetchingInProgress = message => ({
  type: MEASUREMENTS.FETCHING_IN_PROGRESS,
  payload: JSON.parse(message)
});
