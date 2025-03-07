// store
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

import { counterSlice } from "./counterSlice";
import { userSlice } from "./userSlice";

const reducers = combineReducers({
  counter: counterSlice.reducer,
  user: userSlice.reducer,
<<<<<<< HEAD
  //counter라는 reducer라고 부를게 라는 묶음. counterSlice.js에서 export한 것 받아와서
=======
>>>>>>> 5f203ca49e4bcc0ca53c9ce0ae58fd33448dac41
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
});
