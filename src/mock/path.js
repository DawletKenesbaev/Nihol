import AllUsers from "./../components/AllUsers";
import HalfTime from "./../components/HalfTime";
import Home from "./../components/Home";
import TimeUp from "./../components/TimeUp";
import EmptyPlaces from "./../components/EmptyPlaces";
import Report from "./../components/Report";
import OrdinaryRooms from './../components/BuildingTypes/OrdinaryRooms';
import LuxuryRooms from './../components/BuildingTypes/LuxuryRooms'
import Cottages from './../components/BuildingTypes/Cottages'

export const path = [
    {
        id:'0',
        path: '/',
        element: <Home />,
    },
    {
        id:'1',
        path: '/all-users',
        element: <AllUsers />,
    },
    {
        id:'2',
        path: '/middle-users',
        element: <HalfTime />,
    },
    {
        id:'3',
        path: '/end-users',
        element: <TimeUp />,
    },
    {
        id:'5',
        path: '/empty-places',
        element: <EmptyPlaces />,
        hasChild:true,
        children: [
            {
                id:'4-1',
                path: 'ordinary-rooms',
                element: <OrdinaryRooms />
            },
            {
                id:'4-2',
                path: 'luxury-rooms',
                element: <LuxuryRooms />
            },
            {
                id:'4-3',
                path: 'cottages',
                element: <Cottages />
            }
        ]
    },
    {
        id:'6',
        path: '/report',
        element: <Report />,
    },
]
