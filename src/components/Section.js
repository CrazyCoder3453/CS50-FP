import React from 'react'
import Sidebar from './Sidebar'
import Ad from './Ad'
import Popular from './Popular'
import styled from 'styled-components'

function Section() {
  return (
    <Container>
        <SidebarContainer>
            <Sidebar />
        </SidebarContainer>
        <Info>
            <Ad />
            <Popular />
        </Info>
    </Container>
  )
}

export default Section

const Container = styled.div`
    display: flex;
`

const SidebarContainer = styled.div`
    flex: 0.2;
    background-color: #661816;
    height: 100vh;
`
const Info = styled.div`

`