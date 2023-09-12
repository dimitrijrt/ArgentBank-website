import { createSlice } from '@reduxjs/toolkit';

export const InitialState = {
  email: null,
  isLoggedIn: false,
  token: null,
};

export const authSlice = createSlice({
  name: 'connexion',
  initialState: InitialState,
  reducers: {
    setAuth: (state, action) => {
      const { email, isLoggedIn, token } = action.payload;
      state.email = email;
      state.isLoggedIn = isLoggedIn;
      state.token = token;
    },
  },
});

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;