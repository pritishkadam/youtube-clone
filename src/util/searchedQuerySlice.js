import { createSlice } from '@reduxjs/toolkit';

const searchedQuerySlice = createSlice({
  name: 'searchedQuery',
  initialState: [],
  reducers: {
    searchedQueries: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
  },
});

export const { searchedQueries } = searchedQuerySlice.actions;

export default searchedQuerySlice.reducer;
