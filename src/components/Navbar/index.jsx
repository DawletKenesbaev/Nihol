import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

import { Wrapper } from './style'
import { Dropdown } from 'antd';


import {useDropDownAPI} from '../../generic/DropDown';
import SettingModal from './SettingModal';
import LanguageModal from './LanguageModal';
import { useDispatch } from 'react-redux';
import { switchLocaleModal, switchProfileModal } from '../../redux/modelSlice';


const items = [
 
];

function Navbar() {
  const {navbarDropDownItems} = useDropDownAPI()
  const dispatch = useDispatch()
  const settingClickHandler = () =>{dispatch(switchProfileModal())}
  const localeClickHandler = () =>{dispatch(switchLocaleModal())}
  const navigate = useNavigate()
  const LogOut = () => {
    localStorage.removeItem('token')
    console.log('Log out');
    navigate('/login')
  }
  return (
    <>
         <SettingModal />
         <LanguageModal />
         <Wrapper>
            <Wrapper.Title onClick={()=> navigate('/') } style={{cursor: 'pointer'}}>
              Nihol
            </Wrapper.Title>
          
            <Dropdown
              menu={{
                items:  navbarDropDownItems({settingClickHandler,localeClickHandler,LogOut}),
              }}
              trigger={['click']}
             >
                <Wrapper.Avatar>
                D
                </Wrapper.Avatar>
            </Dropdown>
        </Wrapper>
        <Outlet />
    </>
  )
}

export default Navbar