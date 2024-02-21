import { createSlice } from "@reduxjs/toolkit";

const appDataSlice = createSlice({
  name: "app",
  initialState: {
    loading:false,
    error:false,
    chats: [],
    messages:[],
    users: [],
    error: false,
  },

  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },

    getChatsSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.chats = payload?.data?.result;
    },

    getMessagesSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.messages = payload;
    },

    getUsersSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.users = payload;
    },



    // postDataSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = true;
    //   state[payload?.blog] = payload?.data;
    // },

    // getDraftSuccess: (state, { payload }) => {
    //   state.loading = false;
    //   state.error = true;
    //   state.draft = payload;
    // }
  },
});

export const {
  getChatsSuccess,
  fetchStart,
  fetchFail,
  getMessagesSuccess,
  getUsersSuccess
  // getDataLikeSuccess,
  // postDataSuccess,
  // getDraftSuccess,
  // getDetilSuccess
} = appDataSlice.actions;

export default appDataSlice.reducer;
