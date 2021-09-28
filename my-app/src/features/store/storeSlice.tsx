import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  greeting: 'hello, boy'
};

export const storeSlice = createSlice({
  name: 'store',
  initialState,
  reducers: {

  },
});

export default storeSlice.reducer;
