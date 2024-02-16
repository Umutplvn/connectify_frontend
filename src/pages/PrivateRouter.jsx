import React from 'react'
// import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import Login from './Login'

const PrivateRouter = () => {
    // const {currentUser}=useSelector((state)=>state.auth)
    const currentUser=true
  return (
    <div>
        {currentUser ? <Outlet/> : <Login/>}
    </div>
  )
}

export default PrivateRouter