import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from './features/counter';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedCounterReducer = persistReducer(persistConfig, counterReducer);

export default configureStore({
  reducer: {
    counter: persistedCounterReducer,
  },
});
