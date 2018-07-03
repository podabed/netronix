import { END, eventChannel } from "redux-saga";
import { all, call, fork, put, take } from "redux-saga/effects";

import * as MEASUREMENTS from "./constants";
import {
  fetchingError,
  fetchingInProgress,
  startFetchingMeasurements
} from "./actions";

export function ServerSentEvents(eventSrc) {
  return eventChannel(emitter => {
    eventSrc.onmessage = msg => {
      emitter(msg);
    };

    eventSrc.onerror = error => {
      console.log("Emitter error", error);

      emitter(error);
      emitter(END);
    };

    return () => {
      eventSrc.close();
    };
  });
}

export function* measurementsSaga() {
  let channel;

  try {
    const eventSrc = new EventSource(MEASUREMENTS.STREAM_URL);
    channel = yield call(ServerSentEvents, eventSrc);

    yield put(startFetchingMeasurements());

    while (true) {
      const { data } = yield take(channel);

      try {
        yield put(fetchingInProgress(data));
      } catch (error) {
        console.log("JSON parsing error", error);

        yield put(fetchingError());
      }
    }
  } catch (error) {
    console.log("Saga error", error);

    yield call(channel.close);
    yield put(fetchingError());
  }
}

export default function* root() {
  yield all([fork(measurementsSaga)]);
}
