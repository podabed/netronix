import { compose, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./reducers";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore() {
  const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(sagas);

  return store;
}
