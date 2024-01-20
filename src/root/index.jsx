import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import {path} from '../mock/path'
import NotFound from '../components/NotFound'
function Root() {
  console.log(path[1].path);
  return (
    <Routes>
        <Route path='/' element={ 
              <Navbar />
        }      
        >
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />

        {
          path.map(({id,path,element, hasChild=false ,children })=>{
             return   !hasChild ? <Route key={id} path={path} element={element} />:
             <Route key={id} path={path} element={element} >
               {
                children.map((childValue)=>{
                  return  <Route key={childValue.id} path={childValue.path} element={childValue.element} />
                })
               }
             </Route>

          }
          )
        }
        </Route>
        <Route path='/login' element={<Login />}/>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
} 

export default Root