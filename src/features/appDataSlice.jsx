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
    notes:[],
    stories:[]
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

    noteSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.notes = payload?.data?.result;
    },

    logoutDataSuccess: (state) => {
      state.loading= false;
      state.error= false;
      state.chats= [];
      state.messages=[];
      state.users= [];
      state.error= false;
      state.notes=[];
      state.stories=[]
      state.users=[]
    },
  

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
  getUsersSuccess,
  noteSuccess,
  logoutDataSuccess
  // getDataLikeSuccess,
  // postDataSuccess,
  // getDraftSuccess,
  // getDetilSuccess
} = appDataSlice.actions;

export default appDataSlice.reducer;
