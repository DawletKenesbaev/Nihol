import React from 'react'

import allusers from '../.././assets/images/all_users.svg'
import halftime from '../../assets/images/half_time.svg'
import timeup from '../../assets/images/start_time.svg'
import emptyplaces from '../../assets/images/empty_place.svg'
import reports from '../../assets/images/report.svg'
import {
    UsergroupDeleteOutlined,
    FieldTimeOutlined,
    HourglassOutlined,
    InsertRowRightOutlined
  
  } from '@ant-design/icons';
import {Wrapper} from './style'

import Card from '../../generic/Card'
import { CardData } from '../../mock/carddata'
import { useNavigate } from 'react-router-dom'
import TitleHandler from '../../generic/Title'
import { useTranslation } from 'react-i18next'
function Home() {
  const {t} = useTranslation()
  const navigate = useNavigate()
  return (
    <Wrapper>
        <Wrapper.Container>
           <TitleHandler title={t('home_title')}  showBackIcon={false}/>
           <Wrapper.Box>
              <Card title={'All Users'}  url={allusers}  onClick={()=> navigate('/all-users')}/>
              <Card title={'Half Time'} url={halftime}  onClick={()=> navigate('/middle-users')}/>
           </Wrapper.Box>
           <Wrapper.Box>
              <Card title={'Time Up'}  url={timeup}  onClick={()=> navigate('/end-users')}/>
              <Card title={'Empty Places'} url={emptyplaces}  onClick={()=> navigate('/empty-places')}/>
           </Wrapper.Box>
           <Wrapper.Title>Reports:</Wrapper.Title>
           <Card title={'Reports'} url={reports}  onClick={()=> navigate('/report')}/>
        </Wrapper.Container>
    </Wrapper>
  )
}

export default Home