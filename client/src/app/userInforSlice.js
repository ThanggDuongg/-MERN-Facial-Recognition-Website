import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info:null,
};

const userInforSlice = createSlice({
  name: "userInfor",
  initialState,
  reducers: {
    store: (state, action) => {
      console.log(action.payload)
      state.info = action.payload;
    },
    reset: (state) => {
      state.info = null;
    },
  },
});

const { reducer, actions } = userInforSlice;

export const { store, reset } = actions;
export default reducer;
