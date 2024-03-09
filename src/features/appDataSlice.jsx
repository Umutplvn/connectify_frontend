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
    stories:[],
    myStory:"",
    chatNo:""

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

    getUsersSuccess: (state, {payload }) => {
      state.loading = false;
      state.error = false;
      state.users = payload;
    },

    noteSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.notes = payload?.data?.result;
    },

    createStorySuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.myStory = payload?.data?.response
    },

    storySuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.stories = payload?.data?.response
      state.myStory = payload?.data?.myStory
    },

    findChatSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.chatNo = payload?.data?.result?.chat?._id
    },

    logoutDataSuccess: (state) => {
      state.loading= false;
      state.error= false;
      state.chats= [];
      state.messages=[];
      state.users= [];
      state.error= false;
      state.notes=[];
      state.stories=[];
      state.myStory=""
      state.chatNo=""

    },
  },
});

export const {
  getChatsSuccess,
  fetchStart,
  fetchFail,
  getMessagesSuccess,
  getUsersSuccess,
  noteSuccess,
  logoutDataSuccess,
  storySuccess,
  createStorySuccess,
  findChatSuccess
} = appDataSlice.actions;

export default appDataSlice.reducer;
