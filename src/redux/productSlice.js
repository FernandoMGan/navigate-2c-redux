// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate 2C\src\redux\productSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    producto: 'Prod A',
    ubicacion: 'Prod B',
  },
  reducers: {
    updateProduct: (state, action) => {
      state.producto = action.payload.producto;
      state.ubicacion = action.payload.ubicacion;
    },
  },
});

export const { updateProduct } = productSlice.actions;

export default productSlice.reducer;

