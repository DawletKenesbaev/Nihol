import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css'


import Wrapper from './tools/Wrapper';
import Navbar from './components/Navbar/';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Wrapper>
       <Navbar />
    </Wrapper>
);

