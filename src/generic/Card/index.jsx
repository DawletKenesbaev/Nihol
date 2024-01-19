import React from 'react'
import {Wrapper} from '../Style'
const Card = ({title,icon,onClick}) => {
  return (
    <Wrapper onClick={onClick}>
        <Wrapper.Title>
            {title}
        </Wrapper.Title>
        <Wrapper.Icon>
            {icon}
        </Wrapper.Icon>
    </Wrapper>
  )
}

export default Card;