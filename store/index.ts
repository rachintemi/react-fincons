import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import reducer from "./redux";
import sagas from "./saga";
import { startAxiosLogger } from "../utils/loggingUtils";
import {setDefaultAxios } from "../helpers/axios";

startAxiosLogger();
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

setDefaultAxios(store.dispatch);

sagaMiddleware.run(sagas);

export default store;
