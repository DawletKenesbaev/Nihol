import React from 'react'

import allusers from '../.././assets/images/all_users.svg'
import halftime from '../../assets/images/half_time.svg'
import timeup from '../../assets/images/start_time.svg'
import emptyplaces from '../../assets/images/empty_place.svg'
import reports from '../../assets/images/report.svg'

import {Wrapper} from './style'

import { CardData } from '../../mock/CardData'
import Card from '../../generic/Card'
import { useNavigate } from 'react-router-dom'
function Home() {
    console.log(CardData);
  const navigate = useNavigate()
  return (
    <Wrapper>
        <Wrapper.Container>
           <Wrapper.Title>Sections:</Wrapper.Title>
           {/* <Wrapper.Box>
               <Wrapper.Card onClick={()=> navigate('/all-users')}>
                    <Wrapper.CardTitle>
                        All Users
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={allusers} />               
                </Wrapper.Card>
                <Wrapper.Card onClick={()=> navigate('/middle-users')}>
                    <Wrapper.CardTitle>
                        Half Time
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={halftime} />               
                </Wrapper.Card>
           </Wrapper.Box>
           <Wrapper.Box>
               <Wrapper.Card onClick={()=> navigate('/end-users')}>
                    <Wrapper.CardTitle>
                        Time Up
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={timeup} />               
                </Wrapper.Card>
                <Wrapper.Card onClick={()=> navigate('/empty-places')}>
                    <Wrapper.CardTitle>
                        Empty Places
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={emptyplaces} />               
                </Wrapper.Card>
           </Wrapper.Box> */}
           {/* {
            CardData.map(({title,icon},index)=>{
              return <Card onClick={()=> navigate()} key={index} title={title} icon={icon}/>
            })
           } */}
           <Wrapper.Title>Reports:</Wrapper.Title>
           <Wrapper.Card onClick={()=> navigate('/report')}>
                <Wrapper.CardTitle>
                    Reports
                </Wrapper.CardTitle>
                <Wrapper.CardIcon src={reports} />               
            </Wrapper.Card>
        </Wrapper.Container>
    </Wrapper>
  )
}

export default Home