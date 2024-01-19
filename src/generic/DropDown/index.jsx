import React from 'react';
import { DropdownItem } from '../Style';
import { SettingOutlined, LogoutOutlined, TranslationOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';

export const useDropDownAPI = () => {
  const dispatch = useDispatch()
  return (
    {
      navbarDropDownItems:({settingClickHandler,localeClickHandler })=>{
        return [
          {
            label: <DropdownItem onClick={settingClickHandler}><SettingOutlined />Settings</DropdownItem>,
            key: '0',
          },
          {
            label: <DropdownItem onClick={localeClickHandler}><TranslationOutlined />Change Language</DropdownItem>,
            key: '1',
          },
          {
            type: 'divider',
          },
          {
            label: <DropdownItem
             style={{color:'red'}}
             ><LogoutOutlined />Log out</DropdownItem>,
            key: '3',
          },
        ] 
      }
    }
  );
};

