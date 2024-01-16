import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import {RequireAuth} from 'react-auth-kit'
function Root() {
  return (
    <Routes>
        <Route path='/' element=
           {
            <RequireAuth>
               <Navbar />
            </RequireAuth>
           }
        >
        <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />}/>
    </Routes>
  )
}

export default Root