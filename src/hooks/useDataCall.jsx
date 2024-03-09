import useAxios from "./useAxios";
import {getChatsSuccess, fetchStart, fetchFail, getMessagesSuccess, getUsersSuccess, noteSuccess, storySuccess, createStorySuccess, findChatSuccess} from "../features/appDataSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';

const useDataCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();
  const {name} =useSelector((state)=>state.auth)

//! Users

  const getUsers = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("auth/users");
      dispatch(getUsersSuccess({data}));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };

//! Notes 

  const getNotes = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("app/getnotes");
      dispatch(noteSuccess({data}));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };

  const createNote = async (content) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post("app/createnote", content);
      dispatch(noteSuccess({data}));
      getNotes()
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };


  const deleteNote = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete("app/deletenote");
      dispatch(noteSuccess({data}));
      getNotes()
      } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };

//! Stories

const getStories = async () => {
  dispatch(fetchStart());
  try {
    const { data } = await axiosWithToken("app/getstories");
    dispatch(storySuccess({data}));
  } catch (error) {
    console.log(error);
    dispatch(fetchFail());
    toast(error);
  }
};
  
  const createStory = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post("app/createstory", info);
      dispatch(createStorySuccess({data}));
      console.log("creeate data", data);
      getStories()
      toast(`${name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}, great story!!! 🚀`)
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };

  const deleteStory = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete("app/deletestory");
      dispatch(storySuccess({data}));
      getStories()

    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };


  //! Chats

  const getChats = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("chats/findall");
      dispatch(getChatsSuccess({data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };

  const findChat = async (_id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`chats/find/${_id}`);
      dispatch(findChatSuccess({data }));
      console.log("chat", data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };




  const deleteChat = async (chatId) => {    
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`chats/deletechat/${chatId}` );
      toast("Successfully deleted");
      getChats();
    } catch (error) {
      toast(error);
      dispatch(fetchFail());
    }
  };

//! Messages

  const getMessages = async (chatId) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`message/${chatId}`);
      dispatch(getMessagesSuccess({data}));
      console.log("messages", data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };


  return {getChats, getMessages, deleteChat, getUsers, createNote, deleteNote, getNotes, createStory, getStories, deleteStory, findChat};
};

export default useDataCall;
