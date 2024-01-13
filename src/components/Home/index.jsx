import React from 'react'

import allusers from '../.././assets/images/all_users.svg'

import {Wrapper} from './style'

function Home() {
  return (
    <Wrapper>
        <Wrapper.Container>
           <Wrapper.Title>
            Sections:
           </Wrapper.Title>
           <Wrapper.Card>
                <Wrapper.CardTitle>
                    All Users
                </Wrapper.CardTitle>
                <Wrapper.CardIcon src={allusers} />               
            </Wrapper.Card>
            <Wrapper.Card>
                <Wrapper.CardTitle>
                    All Users
                </Wrapper.CardTitle>
                <Wrapper.CardIcon src={allusers} />               
            </Wrapper.Card>
            <Wrapper.Card>
                <Wrapper.CardTitle>
                    All Users
                </Wrapper.CardTitle>
                <Wrapper.CardIcon src={allusers} />               
            </Wrapper.Card>
            <Wrapper.Card>
                <Wrapper.CardTitle>
                    All Users
                </Wrapper.CardTitle>
                <Wrapper.CardIcon src={allusers} />               
            </Wrapper.Card>
            
        </Wrapper.Container>
    </Wrapper>
  )
}

export default Home