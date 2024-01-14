import styled from "styled-components";


export const Wrapper = styled.div`
    background: rgb(255, 255, 255);
    width: 100%;
    padding: 0px 10%;
    height: 70px;
    margin: auto;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;

`
Wrapper.Title = styled.div`
   font-size: 30px;
   cursor: pointer;
`
Wrapper.Avatar = styled.div`
    background: rgb(245, 106, 0);
    cursor: pointer;
    width: 31px;
    height: 31px;
    line-height: 24px;
    font-size: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`
