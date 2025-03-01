import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Viewer from './pages/Viewer/Viewer'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RedirectPage from './pages/Redirect/Redirect';

const App = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        navigate('/');
      }else{
        console.log("Logged Out");
        navigate('/viewer');
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/viewer' element={<Viewer/>}/>
        <Route path='/player/:id' element={<Player />} />
        <Route path='/user-journeys/users/scout.html' element={<RedirectPage />} />
      </Routes>
      
    </div>
  )
}

export default App
