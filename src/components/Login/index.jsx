import React, { useState } from 'react'
import { Wrapper } from './style'

function Login() {
  const [userData,setUserData] = useState({
    phoneNumber:'',
    password: ''
  });
    

  const OnAuth = () => {
  }
  const OnChange =(e)=>{
    //userData[e.target.name] = e.target.value 
    //web page dont rerender that is why we use state to render our page
     setUserData({
        ...userData,
        [e.target.name]:e.target.value,
     })
     console.log(userData);

  }
  return (
    <Wrapper>
        <Wrapper.Container>
           <Wrapper.Title>
            Wassup
           </Wrapper.Title>
           <Wrapper.Description>
             Biz har kuni kechagidan ko'ra yaxshiroq xizmat ko'rsatishga intilamiz.
           </Wrapper.Description>
           <Wrapper.Input 
            onChange={OnChange}
            name='phoneNumber'
            bordered={false}
            placeholder='(99) 999 99 99' 
            addonBefore="+998" /> 
           <Wrapper.InputPassword 
            onChange={OnChange}
            name='password'
           placeholder="parol"/>
            <Wrapper.Button onClick={OnAuth}>Login</Wrapper.Button>
        </Wrapper.Container>
    </Wrapper>
  )
}

export default Login