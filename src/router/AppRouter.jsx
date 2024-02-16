import { Route, Routes } from "react-router";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import PrivateRouter from "../pages/PrivateRouter";
import EmailVerification from "../pages/EmailVerification";
import MainPage from "../pages/MainPage";
import IndexPage from "../pages/IndexPage";

const AppRouter = () => {
  return (
    <>
    <Routes>
      <Route path="/" index element={<IndexPage/>}/> 
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<PrivateRouter />} >
        <Route path="/verification" element={<EmailVerification/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/main" element={<MainPage/>}/>
      </Route>
    </Routes>
    </>

  )
}

export default AppRouter