
import React, { useEffect, useRef, useState } from 'react';

import { Routes, Route } from 'react-router-dom';


import Home from './pages/home';
import Register from './pages/register';
import Navbar from './Component/navbar';
import Footer from './Component/footer';
import Login from './pages/login';
import toast from 'react-hot-toast';
import axios from 'axios';
import Menu from './pages/menu';
import Menu1 from './pages/menu1';
import DetailProduct from './pages/detail/detailproduct';
import './Assets/utilities/support.css'
import { GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { async } from "@firebase/util";
import { auth } from "./firebase";
import Cart from './pages/cart';
const provider = new GoogleAuthProvider()


export default function App(){
  const[username, setUsername] = useState('')
  const [redirect, setRedirect] = useState(false)
  const[data, setData] = useState('')
  useEffect(() => {
    checkIsLogin()
  },[])

  let checkIsLogin = async() => {
    try{
      let getTokenId = localStorage.getItem('token')
      let getTokenUid = localStorage.getItem('tokenUid')
      if(getTokenId){
        let response = await axios.get(`http://localhost:5000/users?id=${getTokenId}`)
        setUsername(response.data[0].username)
        setRedirect(true)
    } else if(getTokenUid){
      onAuthStateChanged(auth, (userFromFirebase) => {
        console.log('Running')
        if(userFromFirebase){
          setUsername(userFromFirebase.email)
        }
      })
    }
    } catch (error) {

    }
  }


  let onLogInWithGoogle = async() => {
    try{
      let response = await signInWithPopup(auth, provider)
      localStorage.setItem('tokenUid', response.user.uid )
      setUsername(response.user.displayName)
      toast.success("Login Success")
      setTimeout(() => {
        setRedirect(true)
      },3000)
    } catch (error){
      console.log(error.message)
    }
  } 

  onAuthStateChanged(auth, (useFromFirebase) => {
    if(useFromFirebase){
      setData(useFromFirebase.displayName)
    }
  })

  let onLogin = async (inputUsername, inputPassword) => {
    try {
      //step0. Get value input
      // let inputUsername = username.current.value;
      // let inputPassword = password.current.value;
      //step1. Check is username & password exist?
      let response = await axios.get(
        `http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`
      );
      if (response.data.length === 0) throw { message: "Account not found" }; // if data not found, throw error
      localStorage.setItem('token', `${response.data[0].id}`)
      setUsername(response.data[0].username)
      toast.success("Login Success");
      setTimeout(() => {
        setRedirect(true)
      },3000)
      
    } catch (error) {
      toast.error(error.message);
    }

  }


  // let onCard = async (topping, sugar, )
  
  let onLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('tokenUid')
    signOut(auth)
    setRedirect(false)
    setUsername('')
  }
    return(
      <>
        <Navbar  data={{username}} myFunc={{onLogout}}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login myFunc1={{onLogInWithGoogle}} myFunc={{onLogin}} isRedirect={{redirect}}/>}/>
          <Route path='/register' element={<Register isRedirect={{redirect}} />}/>
          <Route path='/menu' element={<Menu />}/>
          <Route path='/menu1' element={<Menu1 />}/>
          <Route path='/productdetail/:id' element={<DetailProduct data={{username}} />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer />
      </>
    )
    }



