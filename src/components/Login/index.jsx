import React, { useRef, useState } from 'react'


import { Wrapper } from './style'
import { notification } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'



import axios from 'axios';


function Login() {
  const PhoneRef = useRef();
  const PasswordRef = useRef();
  const [loading,SetLoading] = useState(false)

  const KeyDetect = (e)=> {
    if (e.key === 'Enter') {
      return OnAuth()
    }    
  }
  // const OnAuth = () => {
  //   const UserValue = {
  //     phoneNumber : `+998934710906` ,
  //     password : PasswordRef.current.input.value
  //   }
  //   if (!PasswordRef || !PhoneRef) {
  //      return notification.error({message:"Please fill all fields"})
  //   }
  //   console.log(process.env.REACT_APP_MAIN_URL);
  //   axios({
  //     url: `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
  //     method:"POST",
  //     data:{
  //       ...UserValue
  //     }
  //   });
  // }
  const OnAuth = async () => {
    const UserValue = {
      phoneNumber: `+998934710906`,
      password: PasswordRef.current.input.value,
    };
  
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_MAIN_URL}/user/sign-in`,
        UserValue
      );
      // Handle successful response
      console.log(response.data);
    } catch (error) {
      // Handle errors
      console.error("AxiosError:", error);
      if (error.response) {
        // The request was made, but the server responded with an error
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received");
        console.error("Request data:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error:", error.message);
      }
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