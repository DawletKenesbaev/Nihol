import React from 'react'
import { Wrapper } from './style'
import { Dropdown } from 'antd';

const items = [
 
];
function Navbar() {
  return (
    <Wrapper>
        <Wrapper.Title>
          Nihol
        </Wrapper.Title>
      
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click','hover']}
         >
            <Wrapper.Avatar>
             D
            </Wrapper.Avatar>
         </Dropdown>
    </Wrapper>
  )
}

export default Navbar