import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { cartSlice } from '../features/cart/cartSlice';
import counterReducer from '../features/counter/counterSlice';
import { itemsSlice } from '../features/items/itemsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    items: itemsSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
