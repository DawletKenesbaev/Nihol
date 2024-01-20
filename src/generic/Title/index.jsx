
import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { LeftOutlined } from '@ant-design/icons'
import {Title} from '../Style'
const TitleWrapper = styled.div`
    width: fit-content;
    display: flex;
    margin: auto;
    font-size: 34px;
`
const TitleHandler = ({title='Not Provided',showBackIcon=true}) => {
  const navigate = useNavigate()
  const goBack =()=> navigate(-1)
  return (
    <TitleWrapper>
        {
            showBackIcon && 
            <LeftOutlined   onClick={goBack} style={{cursor:'pointer',fontSize: '35px'}}/>
        }
        <Title >{title}</Title>
    </TitleWrapper>
  )
}

export default TitleHandler