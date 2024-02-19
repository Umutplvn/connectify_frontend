import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: false,
    currentUser: null,
    username: null,
    token: null,
    userId: null,
    email:null,
    verified:null,
    password:null,
    avatar: "",
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

    registerSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.result?.name;
      state.token = payload?.Token;
      state.userId = payload?.result?._id;
      state.email=payload?.result?.email;
      state.username=payload?.result?.username;
      state.password=payload?.result?.password;
      state.passcode = payload?.passcode;
      state.verified=payload?.result?.verified
    },


    deleteSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = "";
      state.token = "";
      state.userId ="";
      state.avatar ="";
    },

    loginSuccess: (state, { payload }) => {
      state.loading = false;
      state.error = false;
      state.currentUser = payload?.result?.name;
      state.token = payload?.Token;
      state.userId = payload?.result?._id;
      state.email = payload?.result?.email;
      state.username=payload?.result?.username;
      state.verified = payload?.result?.verified;
    },

    //////////

    logoutSuccess: (state) => {
      state.loading = false;
      state.error = false;
      state.currentUser = null;
      state.token = null;
      state.userId = null;
      state.avatar = "";
    },

  

    passwordUpdateSuccess:(state, {payload})=>{
      state.loading = false;
      state.error = false;

    }
  },
});

export const {
  fetchStart,
  fetchFail,
  loginSuccess,
  logoutSuccess,
  registerSuccess,
  passwordUpdateSuccess,
  deleteSuccess
} = authSlice.actions;

export default authSlice.reducer;
