import axios from "axios";
import { useDispatch } from "react-redux";
import {fetchStart,fetchFail,loginSuccess,registerSuccess,logoutSuccess,passwordUpdateSuccess,deleteSuccess, addContactSuccess, removeContactSuccess} from "../features/authSlice";
import { useNavigate } from "react-router";
import {toastErrorNotify,toastSuccessNotify, toastWarnNotify,} from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { axiosWithToken } = useAxios();

  
  const register = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/register/`,
        userData
      );
      console.log("register data ", data);
      dispatch(registerSuccess(data));
      navigate("/verification");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error?.response?.data?.message);
    }
  };

  const deleteUser = async (userId) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.delete(
        `${process.env.REACT_APP_BASE_URL}/auth/users/${userId}/`
      );
      dispatch(deleteSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("User delete failed");
    }
  };

  const update = async (userId, info) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BASE_URL}/auth/users/${userId}`,
        info
      );
      console.log("update ", data);
      dispatch(registerSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Verification failed.");
    }
  };

  const login = async (userData) => {
    dispatch(fetchStart);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login/`,
        userData
      );
      if (!data?.result?.verified) {
        deleteUser(data?.result?._id);
        toastWarnNotify("No such account found!");
      } else {
        dispatch(loginSuccess(data));
        toastSuccessNotify("Welcome to the Connectify.");
        navigate("/chats");
      }
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toastErrorNotify(
        "Incorrect login. Double check your details and try again.  "
      );
    }
  };

  const logout = async () => {
    dispatch(fetchStart);
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout successfull");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(error);
    }
  };

    ///


   const addContact = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`auth/users/addcontact`, info);
      dispatch(addContactSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const removeContact = async (info) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`auth/users/removecontact`, info);
      dispatch(addContactSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const passwordUpdate = async (data) => {
    try {
      const res = await axiosWithToken.put(
        `${process.env.REACT_APP_BASE_URL}users/auth/password/change`,
        data
      );
      dispatch(passwordUpdateSuccess(res));
      toastSuccessNotify("Password Changed Successfully");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Failed to change password");
      toastErrorNotify(error);
    }
  };

  return { login, register, logout, passwordUpdate, deleteUser, update, addContact, removeContact };
};

export default useAuthCall;
