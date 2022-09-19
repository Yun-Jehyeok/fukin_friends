import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./store/reducers";
import rootSaga from "./store/sagas";

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NEXT_PUBLIC_NODE_ENV === "developer",
  });

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const wrapper = createWrapper(createStore, {
  debug: process.env.NEXT_PUBLIC_NODE_ENV === "development",
});

const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default wrapper;
