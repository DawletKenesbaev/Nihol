import React from 'react'
import { Outlet } from 'react-router-dom';

import { Wrapper } from './style'
import { Dropdown } from 'antd';


import {useDropDownAPI} from '../../generic/DropDown';


const items = [
 
];
function Navbar() {
  const {navbarDropDownItems} = useDropDownAPI()
  return (
    <>
         <Wrapper>
            <Wrapper.Title>
              Nihol
            </Wrapper.Title>
          
            <Dropdown
              menu={{
                items:  navbarDropDownItems,
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