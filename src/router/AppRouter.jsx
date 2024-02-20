import { Route, Routes } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRouter from "../pages/PrivateRouter";
import EmailVerification from "../pages/EmailVerification";
import MainPage from "../pages/MainPage";
import IndexPage from "../pages/IndexPage";
import Chats from "../pages/Chats"
import Contacts from "../pages/Contacts"
import Settings from "../pages/Settings"
import Status from "../pages/Status"
import People from "../pages/People"

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" index element={<IndexPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="/verification" element={<EmailVerification />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/chats" element={<Chats/>} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/status" element={<Status />} />
          <Route path="/people" element={<People />} />


        </Route>
      </Routes>
    </>
  );
};

export default AppRouter;
