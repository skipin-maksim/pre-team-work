import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import test from "./orders/ordersReducer";
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// const tabsPersistConfig = {
//   key: "tabs",
//   storage,
//   whitelist: ["items"],
// };
// const temporaryStorageLocationPersistConfig = {
//   key: "orders",
//   storage,
//   whitelist: ["temporaryStorageLocation"],
// };

export const store = configureStore({
  reducer: {
    test: test,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
