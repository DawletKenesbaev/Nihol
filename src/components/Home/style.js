import styled from "styled-components";




export const Wrapper = styled.div`
  background:#fff;
  width:100%;
  min-height: 100vh;
  display:flex;
  justify-content:center;
`
Wrapper.Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:fit-content;

`
Wrapper.Title = styled.div`
    display: flex;
    align-items: center;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 41px;
    line-height: 77px;
    color: rgb(0, 0, 0);
    margin: 40px;
`
Wrapper.Box = styled.div`
    margin: 30px auto;
    width: fit-content;
    display: flex;
    gap: 150px;
`
Wrapper.Card = styled.div`
    width: 250px;
    height: 250px;
    cursor: pointer;
    border-radius: 17px;
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    box-shadow: rgba(0, 0, 0, 0.25) 6px 6px 7px;

`
Wrapper.CardTitle = styled.div`
    padding-top: 30px;
    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: rgb(191, 191, 191);
`
Wrapper.CardIcon = styled.img`
    width: 133px;
    height: 192px;
    margin-bottom: 30px;

`