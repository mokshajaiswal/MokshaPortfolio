import { configureStore } from '@reduxjs/toolkit';
import postInteractionsReducer from './slices/postInteractionsSlice';

const store = configureStore({
  reducer: {
    postInteractions: postInteractionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;