import React, { useRef, useState } from 'react'
import { Wrapper } from './style'
import { notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'

function Login() {
  const PhoneRef = useRef();
  const PasswordRef = useRef();
  const [loading,SetLoading] = useState(false)

  const KeyDetect = (e)=> {
    if (e.key === 'Enter') {
      return OnAuth()
    }    
  }
  const OnAuth = () => {
    const UserValue = {
      phone : `+998${PhoneRef.current.input.value}` ,
      password : PasswordRef.current.input.value
    }
    if (!PasswordRef || !PhoneRef) {
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
            <Wrapper.Button onClick={OnAuth}>
              {
                loading ? <LoadingOutlined /> : 'Login'
              }
            </Wrapper.Button>
        </Wrapper.Container>
    </Wrapper>
  )
}

export default Login