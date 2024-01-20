import React from 'react'
import styled from 'styled-components'
const Card = ({title,url,onClick}) => {
  return (
    <Wrapper onClick={onClick}>
        <CardTitle>
            {title}
        </CardTitle>
        <CardIcon  src={url}/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
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
const CardTitle = styled.div`
padding-top: 30px;
font-family: Inter;
font-style: normal;
font-weight: 600;
font-size: 18px;
color: rgb(93, 92, 92);
`
const CardIcon = styled.img`
width: 133px;
height: 192px;
margin-bottom: 30px;

`
export default Card;