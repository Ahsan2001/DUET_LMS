import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userReducer from "./slices/userSlice";
import sidebarReducer from "./slices/sidebarSlice";
import loadingReducer from "./slices/loadingSlice";

const rootReducer = combineReducers({
  user: userReducer,
  sidebar: sidebarReducer,
  loading: loadingReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

export default store;
