import useAxios from "./useAxios";
import {getChatsSuccess, fetchStart, fetchFail, getMessagesSuccess, getUsersSuccess, noteSuccess} from "../features/appDataSlice";
import { useDispatch } from "react-redux";
import toast from 'react-hot-toast';

const useDataCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();


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

  const getMessages = async (chatId) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`message/${chatId}`);
      dispatch(getMessagesSuccess({data}));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toast(error);
    }
  };

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


  return {getChats, getMessages, deleteChat, getUsers, createNote, deleteNote, getNotes};
};

export default useDataCall;
