import {
    UsergroupDeleteOutlined,
    FieldTimeOutlined,
    HourglassOutlined,
    InsertRowRightOutlined
  
  } from '@ant-design/icons';
  
  export let CardData = [
      {
          title: 'All Users',
          icon: <UsergroupDeleteOutlined style={{fontSize:'115px'}} />,
          id: 0,
          path: '/middle-users'
      },
      {
          title: 'Half Time',
          icon: <FieldTimeOutlined style={{fontSize:'115px'}} />,
          id: 1,
          path: '/all-users'
          
      }, 
      {
          title: 'Time Up',
          icon: <HourglassOutlined style={{fontSize:'115px'}} />,
          id: 2,
          path: '/end-users'
      }, 
      {
          title: 'Empty Places',
          icon: <InsertRowRightOutlined style={{fontSize:'115px'}} />,
          id: 3,
          path: '/empty-places'
      },
  ]

  export const emptyPlacesCardData = [
    {
        title: 'Ordinary Rooms',
        icon: <UsergroupDeleteOutlined style={{fontSize:'115px'}} />,
        id: 0,
        path: '/ordinary-rooms'
    },
    {
        title: 'Luxury Rooms',
        icon: <FieldTimeOutlined style={{fontSize:'115px'}} />,
        id: 1,
        path: '/luxury-rooms'
    }, 
    {
        title: 'Cottages',
        icon: <HourglassOutlined style={{fontSize:'115px'}} />,
        id: 3,
        path: '/cottages'
    }, 
  ]