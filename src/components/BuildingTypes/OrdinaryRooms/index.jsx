import React from 'react'
import building from '../../../assets/images/building.svg'
import { Outlet, useNavigate, useOutlet } from 'react-router-dom'
import Card from '../../../generic/Card'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
const OrdinaryRooms = () => {
    const navigate = useNavigate()
    const HasOutlet = useOutlet()
    const {t} = useTranslation()
    return (
      !HasOutlet ?
       <>
            <Wrapper>
              <Card title={`${t('building')} 2`}  url={building}  onClick={()=> navigate('/empty-places/ordinary-rooms/2')}/>
              <Card title={`${t('building')} 4`}  url={building}  onClick={()=> navigate('/empty-places/luxury-rooms/4')}/>
              <Card title={`${t('building')} 6`}  url={building}  onClick={()=> navigate('/empty-places/cottages/6')}/>
             </Wrapper>
       </>:  <Outlet />
  
    ) 
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  width: 700px;
  grid-row-gap:50px;
  grid-column-gap:80px;
  margin:0 auto;
  align-items: center;
  justify-content: center;
`


export default OrdinaryRooms