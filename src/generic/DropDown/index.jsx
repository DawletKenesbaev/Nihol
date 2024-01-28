import React from 'react';
import { DropdownItem } from '../Style';
import { SettingOutlined, LogoutOutlined, TranslationOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

export const useDropDownAPI = () => {
  const {t} = useTranslation()
  const dispatch = useDispatch()
  return (
    {
      navbarDropDownItems:({settingClickHandler,localeClickHandler,logoutClickHandler })=>{
        return [
          {
            label: <DropdownItem onClick={settingClickHandler}><SettingOutlined />{t('settings')}</DropdownItem>,
            key: '0',
          },
          {
            label: <DropdownItem onClick={localeClickHandler}><TranslationOutlined />{t('change_lang')}</DropdownItem>,
            key: '1',
          },
          {
            type: 'divider',
          },
          {
            label: <DropdownItem onClick={logoutClickHandler}
             style={{color:'red'}} 
             ><LogoutOutlined />{t('logout')}</DropdownItem>,
            key: '3',
          },
        ] 
      }
    }
  );
};

