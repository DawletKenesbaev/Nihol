import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from '../components/Login'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import {path} from '../mock/path'
import NotFound from '../components/NotFound'
import i18 from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from '../utils/locale/en'
import { ru } from '../utils/locale/ru'
import { uz } from '../utils/locale/uz'
function Root() {
  i18.use(initReactI18next).init({
    resourse : {
      en:{ translation: en},
      ru:{ translation: ru},
      uz: {translation: uz}
    },
    lang: 'en',
    fallbackLng : 'en',
  })
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