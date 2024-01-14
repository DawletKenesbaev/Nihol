import React from 'react'

import allusers from '../.././assets/images/all_users.svg'
import halftime from '../../assets/images/half_time.svg'
import timeup from '../../assets/images/start_time.svg'
import emptyplaces from '../../assets/images/empty_place.svg'
import reports from '../../assets/images/report.svg'



import {Wrapper} from './style'

function Home() {
  return (
    <Wrapper>
        <Wrapper.Container>
           <Wrapper.Title>Sections:</Wrapper.Title>
           <Wrapper.Box>
               <Wrapper.Card>
                    <Wrapper.CardTitle>
                        All Users
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={allusers} />               
                </Wrapper.Card>
                <Wrapper.Card>
                    <Wrapper.CardTitle>
                        Half Time
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={halftime} />               
                </Wrapper.Card>
           </Wrapper.Box>
           <Wrapper.Box>
               <Wrapper.Card>
                    <Wrapper.CardTitle>
                        Time Up
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={timeup} />               
                </Wrapper.Card>
                <Wrapper.Card>
                    <Wrapper.CardTitle>
                        Empty Places
                    </Wrapper.CardTitle>
                    <Wrapper.CardIcon src={emptyplaces} />               
                </Wrapper.Card>
           </Wrapper.Box>
            <Wrapper.Title>Reports:</Wrapper.Title>
           <Wrapper.Card>
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