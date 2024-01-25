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
              <Card title={t('all_users')}  url={allusers}  onClick={()=> navigate('/all-users')}/>
              <Card title={t('half_time')} url={halftime}  onClick={()=> navigate('/middle-users')}/>
           </Wrapper.Box>
           <Wrapper.Box>
              <Card title={t('time_up')}  url={timeup}  onClick={()=> navigate('/end-users')}/>
              <Card title={t('empty_places')} url={emptyplaces}  onClick={()=> navigate('/empty-places')}/>
           </Wrapper.Box>
           <Wrapper.Title>{t('reports')}</Wrapper.Title>
           <Card title={t('report')} url={reports}  onClick={()=> navigate('/report')}/>
        </Wrapper.Container>
    </Wrapper>
  )
}

export default Home