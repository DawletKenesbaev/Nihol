import styled from "styled-components";


import { Input } from "antd";

export const Wrapper = styled.div`
  background:#fff;
  width:100%;
  height: 100vh;
  display:flex;
  justify-content:center;
  align-items:center;
`
Wrapper.Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  width:fit-content;
  width: 480px;
  @media (max-width: 600px) {
    width: 370px;
}

`
Wrapper.Title = styled.div`
    margin-top: 20px;
    font-size: 30px;
    color: rgb(57, 56, 77);
`
Wrapper.Description = styled.div`
    margin-top: 10px;
    color: rgb(178, 176, 184);
    text-align: center;
    width: 80%;
`
Wrapper.Input = styled(Input)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 80%;
    height: 50px;
    background: rgb(250, 251, 254);
    outline: none;
    border: 1px solid rgb(240, 238, 247);
    border-radius: 12px;
    padding-left: 15px;
    color: rgb(89, 90, 98);
    .ant-input , .ant-input-group-addon {
        border:none;
    }

`
Wrapper.InputPassword = styled(Input.Password)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
    width: 80%;
    height: 50px;
    background: rgb(250, 251, 254);
    outline: none;
    border: 1px solid rgb(240, 238, 247);
    border-radius: 12px;
    padding-left: 15px;
    color: rgb(89, 90, 98);
`
Wrapper.Button = styled.div`
margin-top: 50px;
width: 80%;
height: 50px;
border: 1px solid rgb(240, 238, 247);
border-radius: 12px;
display: flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
cursor: pointer;
font-size: 16px;
color: rgb(255, 255, 255);
background: rgb(48, 104, 204);

`