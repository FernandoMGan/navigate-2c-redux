// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate\src\redux\store.js

import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import historyReducer from './historySlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    historys: historyReducer,
  },
});

export default store;
