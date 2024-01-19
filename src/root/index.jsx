import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import AllUsers from '../components/AllUsers'
import HalfTime from '../components/HalfTime'
import Report from '../components/Report'
import TimeUp from '../components/TimeUp'
import EmptyPlaces from '../components/EmptyPlaces'

function Root() {
  return (
    <Routes>
        <Route path='/' element={ 
              <Navbar />
        }      
        >
        <Route index element={<Home />} />
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path='/all-users' element={<AllUsers />}/>
        <Route path='/middle-users' element={<HalfTime />}/>
        <Route path='/end-users' element={<TimeUp />}/>
        <Route path='/report' element={<Report />}/>
        <Route path='/empty-places' element={<EmptyPlaces />}/>
    </Routes>
  )
} 

export default Root