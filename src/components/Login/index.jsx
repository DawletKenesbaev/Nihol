import React, { useRef, useState } from 'react'


import { Wrapper } from './style'
import { notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'



import useNotificationAPI from '../../generic/NotificationAPI';
import useAxios from '../../hooks/useAxios';

import useSignIn from 'react-auth-kit/hooks/useSignIn';


function Login() {
  const PhoneRef = useRef();
  const PasswordRef = useRef();
  const [loading,SetLoading] = useState(false)
  

  const Notifier = useNotificationAPI()
  const axios = useAxios()

  const sigIn = useSignIn()

  const KeyDetect = (e)=> {
    if (loading) return;
    if (e.key === 'Enter' || e.key === 'Enter') return OnAuth() 
  }
  const OnAuth = async () => {
    const {password,phoneNumber} = {
      phoneNumber: PhoneRef.current.input.value,
      password: PasswordRef.current.input.value,
    };
    if (!password || !phoneNumber)  return Notifier('empty') 
    SetLoading(true)
    axios({
      method:'POST',
      url: `/user/sign-in`,
      body: {
        phoneNumber:`+998${phoneNumber}`,
        password
      }
    }).then(
      ({
        data:{
          data:{
            token,
            user
          }
        }
       })=>{
        localStorage.setItem('token',token)
        console.log(user);
        sigIn({

        })
        SetLoading(false)
        return notification.success({message : 'Successfully Logged In '})
       }
      ).catch((error)=>{
        console.error("AxiosError:", error);
        SetLoading(false)
        console.log(error.response.status);
        Notifier(error.response.status)
      })
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