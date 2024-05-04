// File C:\Home\Developing\PF-PT19A-FGan-MyPools\front\navigate 2C\src\redux\historySlice.js

import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
  name: 'historys',
  initialState: {
    historia: 'Hist A',
    fecha: 'Hist B',
  },
  reducers: {
    updateHistory: (state, action) => {
      state.historia = action.payload.historia;
      state.fecha = action.payload.fecha;
    },
  },
});

export const { updateHistory } = historySlice.actions;

export default historySlice.reducer;

