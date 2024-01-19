import React from 'react'
import { Outlet } from 'react-router-dom';

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

  return (
    <>
         <SettingModal />
         <LanguageModal />
         <Wrapper>
            <Wrapper.Title>
              Nihol
            </Wrapper.Title>
          
            <Dropdown
              menu={{
                items:  navbarDropDownItems({settingClickHandler,localeClickHandler }),
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