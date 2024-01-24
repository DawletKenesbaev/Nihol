import React, { useRef, useState } from 'react'


import { Wrapper } from './style'
import { notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'



import useNotificationAPI from '../../generic/NotificationAPI';
import useAxios from '../../hooks/useAxios';
import UseInput from '../../generic/UseInput';



function Login() {
  const [phone,setPhone] =useState('')
  const PasswordRef = useRef();
  const [loading,SetLoading] = useState(false)
  
  const Notifier = useNotificationAPI()
  const axios = useAxios()
  
  const { phoneFormatter} = UseInput()

  const KeyDetect = (e)=> {
    if (loading) return;
    if (e.key === 'Enter' || e.key === 'Enter') return OnAuth() 
  }
  const OnAuth = async () => {
    const {password,phoneNumber} = {
      phoneNumber:phone,
      password: PasswordRef.current.input.value,
    };
    if (!password || !phoneNumber)  return Notifier('empty') 
    SetLoading(true)
    axios({
      method:'POST',
      url: `/user/sign-in`,
      body: {
        phoneNumber:`+998${phoneNumber.replace(/[^\d]/g , '')}`,
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
           Please contact me first on Telegram or Gmail to obtain the <strong>phone number</strong> and <strong>password</strong> for logging in. Afterward, you can access the actual website."
              <br/>
              Tg: https://t.me/TheUbermensch1 <br />
              Gmail: devdawlet@gmail.com
          </Wrapper.Description>
           <Wrapper.Input 
            name='phoneNumber'
            value={phone}
            bordered={false}
            placeholder='(99) 999 99 99' 
            addonBefore="+998"
            onChange={(e)=> setPhone(phoneFormatter(e.target.value))}
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