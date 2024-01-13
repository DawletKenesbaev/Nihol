import React from 'react';
import { DropdownItem } from '../Style';
import { SettingOutlined, LogoutOutlined, TranslationOutlined } from '@ant-design/icons';

export const useDropDownAPI = () => {
  return (
    {
      navbarDropDownItems: [
        {
          label: <DropdownItem><SettingOutlined />Settings</DropdownItem>,
          key: '0',
        },
        {
          label: <DropdownItem><TranslationOutlined />Change Language</DropdownItem>,
          key: '1',
        },
        {
          type: 'divider',
        },
        {
          label: <DropdownItem danger={true}><LogoutOutlined />Log out</DropdownItem>,
          key: '3',
        },
      ]
    }
  );
};

