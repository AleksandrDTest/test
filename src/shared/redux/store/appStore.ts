import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import { coinbaseApi } from "../api/coinbaseApi";
import { formCurrentCurensy } from "../slice";

export const rootReducer = combineReducers({
  formCurrentCurensy,
  [coinbaseApi.reducerPath]: coinbaseApi.reducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ serializableCheck: false }).concat(
        coinbaseApi.middleware
      ),
    preloadedState,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore["dispatch"];
