import React, { useRef, useState } from 'react'


import { Wrapper } from './style'
import { notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'



import useNotificationAPI from '../../generic/NotificationAPI';
import useAxios from '../../hooks/useAxios';


function Login() {
  const PhoneRef = useRef();
  const PasswordRef = useRef();
  const [loading,SetLoading] = useState(false)


  const Notifier = useNotificationAPI()
  const axios = useAxios()



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
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
        {
          phoneNumber:`+998${phoneNumber}`,
          password
        } 
      );
      console.log(response.data.data.user);
      localStorage.setItem('token',response.data.data.token)
      SetLoading(false)
      return notification.success({message : 'Successfully Logged In '})
    } catch (error) {
      console.error("AxiosError:", error);
      SetLoading(false)
      Notifier(error.response.status)
    }
  };
 

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