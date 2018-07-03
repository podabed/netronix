import * as MEASUREMENTS from "./constants";

const initialState = { error: false, fetching: false, measurements: [] };

const measurements = (state = initialState, { type, payload }) => {
  switch (type) {
    case MEASUREMENTS.FETCHING_ERROR:
      return {
        ...state,
        error: true
      };

    case MEASUREMENTS.FETCHING_IN_PROGRESS:
      return {
        ...state,
        measurements: payload
      };

    case MEASUREMENTS.FETCHING_STARTED:
      return {
        ...state,
        fetching: true
      };

    default:
      return state;
  }
};

export default measurements;
