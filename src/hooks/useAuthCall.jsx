import axios from "axios";
import { useDispatch } from "react-redux";
import {
  fetchStart,
  fetchFail,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
  passwordUpdateSuccess,
  deleteSuccess,
  updateContactSuccess,
  getMyContactsSuccess,
} from "../features/authSlice";
import { useNavigate } from "react-router";
import toast from 'react-hot-toast';
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
      toast(error?.response?.data?.message);
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
      toast("User delete failed! ✖️");
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
      toast("Verification failed! ✖️");
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
        toast("No such account found!");
      } else {
        dispatch(loginSuccess(data));
        toast("Welcome to the Connectify.");
        navigate("/chats");
      }
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
      toast(
        "Incorrect login. Double check your details and try again.  "
      );
    }
  };

  const logout = async () => {
    dispatch(fetchStart);
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/logout/`);
      dispatch(logoutSuccess());
      toast("Logout successfull");
      navigate("/login");
    } catch (error) {
      dispatch(fetchFail());
      toast(error);
    }
  };

  const getMyContacts = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`auth/users/getmycontacts`);
      dispatch(getMyContactsSuccess({ data }));
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const addContact = async (contactId) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(`auth/users/addcontact`, {
        contactId: contactId,
      });
      dispatch(updateContactSuccess({ data }));
      getMyContacts();
      toast('Person has been added to your contacts.')
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  const removeContact = async (contactId) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.post(
        `auth/users/removecontact`,
        {
          contactId: contactId,
        }
      );
      dispatch(updateContactSuccess({ data }));
      getMyContacts();
      toast('Person has been removed from your contacts.')

    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  ///
  // const passwordUpdate = async (data) => {
  //   try {
  //     const res = await axiosWithToken.put(
  //       `${process.env.REACT_APP_BASE_URL}users/auth/password/change`,
  //       data
  //     );
  //     dispatch(passwordUpdateSuccess(res));
  //     toast("Password Changed Successfully");
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toast("Failed to change password");
  //     toast(error);
  //   }
  // };

  return {
    login,
    register,
    logout,
    deleteUser,
    update,
    addContact,
    removeContact,
    getMyContacts,
  };
};

export default useAuthCall;
