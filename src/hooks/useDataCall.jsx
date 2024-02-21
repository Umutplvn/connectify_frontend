import useAxios from "./useAxios";
import {getChatsSuccess, fetchStart, fetchFail, getMessagesSuccess} from "../features/appDataSlice";
import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import axios from "axios";

const useDataCall = () => {
  const { axiosWithToken, axiosPublic } = useAxios();
  const { token, userId } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  const getChats = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("chats/findall");
      dispatch(getChatsSuccess({data }));
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };

  const getMessages = async (chatId) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`message/${chatId}`);
      dispatch(getMessagesSuccess({data}));
      console.log(data);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };

  // const getDrafts = async (userId) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken(`/blogs/?author=${userId}`);
      
  //     const info = data?.filter((item) => item?.status == "d");
  //     dispatch(getDraftSuccess({ info }));

  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(error);
  //   }
  // };

  // const getViews =async (id) => {
  //   try {
  //     await axios(`${process.env.REACT_APP_BASE_URL}api/blogs/${id}/`, {
  //       headers: { Authorization: `${token}` }
  //     });
  //     getData("blogs")
  //   } catch (error) {
  //     toastErrorNotify(error);
  //   }
  // };

  // const postData = async (url, id, info) => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken.post(`${url}/${id}`, info);
  //     dispatch(postDataSuccess({ url, data }));
  //     getData("blogs");
      
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(error.response.data.detail);
  //     console.log(error);
  //   }
  // };

  // const putData = async (url, id, info) => {
  //   dispatch(fetchStart());
  //   try {
  //      await axiosWithToken.put(`${url}/${id}/`, info);
  //     getData("blogs");
  //     getDrafts(userId);

  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(error.response.data.detail);
  //   }
  // };

  // const deleteData = async (id) => {
  //   dispatch(fetchStart());
  //   try {
  //     await axiosWithToken.delete(`blogs/${id}`);
  //     toastSuccessNotify("Successfully deleted");
  //     getData("blogs");
  //   } catch (error) {
  //     toastErrorNotify(error);
  //     dispatch(fetchFail());
  //   }
  // };

  return {getChats, getMessages};
};

export default useDataCall;
