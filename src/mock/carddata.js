import {
    UsergroupDeleteOutlined,
    FieldTimeOutlined,
    HourglassOutlined,
    InsertRowRightOutlined
  
  } from '@ant-design/icons';
  
  export let CardData = [
      {
          title: 'All Users',
          icon: <UsergroupDeleteOutlined style={{fontSize:'115px'}} />
      },
      {
          title: 'Half Time',
          icon: <FieldTimeOutlined style={{fontSize:'115px'}} />
      }, 
      {
          title: 'Time Up',
          icon: <HourglassOutlined style={{fontSize:'115px'}} />
      }, 
      {
          title: 'Empty Places',
          icon: <InsertRowRightOutlined style={{fontSize:'115px'}} />
      },
  ]