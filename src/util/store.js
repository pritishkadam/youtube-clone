import { configureStore } from '@reduxjs/toolkit';
import navSlice from './navSlice';
import searchSlice from './cacheSearchSlice';
import searchedQuerySlice from './searchedQuerySlice';

const store = configureStore({
  reducer: {
    nav: navSlice,
    search: searchSlice,
    searchedQuery: searchedQuerySlice,
  },
});

export default store;
