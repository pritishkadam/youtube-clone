import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggle_menu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    close_menu: (state) => {
      state.isMenuOpen = false;
    },
    open_menu: (state) => {
      state.isMenuOpen = true;
    },
  },
});

export const { toggle_menu, close_menu, open_menu } = navSlice.actions;

export default navSlice.reducer;
