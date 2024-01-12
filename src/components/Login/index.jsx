import React, { useRef, useState } from 'react'
import { Wrapper } from './style'
import { notification } from 'antd';

function Login() {
  const PhoneRef = useRef();
  const PasswordRef = useRef();


  const KeyDetect = (e)=> {
    if (e.key === 'Enter') {
      return OnAuth()
    }    
  }
  const OnAuth = () => {
    const phone = PhoneRef.current.input.value;
    const password = PasswordRef.current.input.value
    if (!password || !phone) {
       return notification.error({message:"Please fill all fields"})
    }
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
            ref={PhoneRef}
            name='phoneNumber'
            bordered={false}
            placeholder='(99) 999 99 99' 
            addonBefore="+998"
            /> 
            <Wrapper.InputPassword 
            ref={PasswordRef}
            name='password'
            placeholder="parol"
            onKeyDown={KeyDetect}
            />
            <Wrapper.Button onClick={OnAuth}>Login</Wrapper.Button>
        </Wrapper.Container>
    </Wrapper>
  )
}

export default Login