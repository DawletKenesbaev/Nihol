import React from 'react'
import { Outlet, useLocation, useNavigate, useOutlet } from 'react-router-dom'
import Card from '../../generic/Card'
import styled from 'styled-components'
import TitleHandler from '../../generic/Title'
import {emptyPlacesCardData} from  '../../mock/carddata'
import { useTranslation } from 'react-i18next'
const EmptyPlaces = () => {
  const {t} = useTranslation()
  const {pathname} = useLocation()
  const navigate = useNavigate()
  const HasOutlet = useOutlet()
  const navigateHandler = (path) => navigate(`${pathname}${path}`)
  return (
    !HasOutlet ?
     <>
          <TitleHandler title={t('building_types')} />
          <Wrapper>
            <Card title={t('ordinary_rooms')}  url={'https://nihol-delta.vercel.app/static/media/ordinary_room.0f96100e473c59f818f110aba998e21e.svg'}  onClick={()=> navigate('/empty-places/ordinary-rooms')}/>
            <Card title={t('luxury_rooms')}  url={'https://nihol-delta.vercel.app/static/media/luxury_room.694d9f7a39bdb5a31f5906f199afae96.svg'}  onClick={()=> navigate('/empty-places/luxury-rooms')}/>
            <Card title={t('cottages')}  url={'https://nihol-delta.vercel.app/static/media/mansion.f33a6277abb4021ec7102250b6e1b4f9.svg'}  onClick={()=> navigate('/empty-places/cottages')}/>
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


export default EmptyPlaces