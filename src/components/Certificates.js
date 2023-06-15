import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import styled from 'styled-components'

function Certificates() {
  return (
    <div>
        <Header />

        <Container>
            <Sidebar />
            <Certificate>
                <h1>Certificates</h1>
                <p>CS50 is a course that is available for free on edX for anyone to take. It is 11 weeks, and it
                    introduces students to many different languages. You can pay for a verified certificate or just
                    get the free one that they provide. This was one of the best online courses I have ever taken,
                    and it was also really challenging but really fun as well. Thank you to David Malan, Harvard,
                    and all of CS50 for making this possible. This was CS50!
                </p>
            </Certificate>
        </Container>
    </div>
  )
}

export default Certificates

const Container = styled.div`
    display: flex;
`

const Certificate = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`