import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { MfReducer } from "./Reducer";
import rootsaga from "./Index";

const SagaMiddleware = createSagaMiddleware()
export const store = configureStore({
    reducer: {
        app_mfe:MfReducer.reducer
    },
    middleware: (defaultmiddleware:any) =>
        defaultmiddleware({ serializableCheck: false }).concat(SagaMiddleware),
      devTools: true,
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
SagaMiddleware.run(rootsaga);