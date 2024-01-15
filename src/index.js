import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css'


import Wrapper from './tools/Wrapper';
import Navbar from './components/Navbar/';
import Login from './components/Login'
import Home from './components/Home';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Wrapper>
       <Navbar />
       <Login />
       <Home />
    </Wrapper>
);

