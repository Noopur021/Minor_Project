import React from 'react';
import Header from './Header'
import './css/header.css'
import Sidebar from './Sidebar';
import Feed from "./Feed"
import Widget from "./Widget"
import Login from "./Login"
import {useSelector} from 'react-redux';
import { auth } from './firebase'
import {useDispatch } from "react-redux"
import  { useEffect, useState } from "react";
import {loginuser, logoutuser, selectUser} from './features/UserSlice'

function App() {
  const user=useSelector(selectUser);

 
const dispatch= useDispatch();
useEffect (()=>{
auth.onAuthStateChanged((userAuth)=>{
if(userAuth) {
//already login
dispatch(loginuser({
  email:userAuth.email,
  uid: userAuth.uid,
  photoURL:userAuth.photoURL,
  displayName:userAuth.displayName
}))
}
else {

  dispatch(logoutuser())
}
})
// logout
}, [])
console.log(user);
  return (
    <>
    {
      !user?(<Login/>):
    (
    <div className="app_wrapper">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
        <Widget />
      </div>
    </div>)
  
}
</>
);}
export default App;
