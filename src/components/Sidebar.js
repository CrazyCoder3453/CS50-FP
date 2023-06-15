import React from 'react'
import styled from 'styled-components'
import AttractionsIcon from '@mui/icons-material/Attractions';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <Container>
        <div>
            <span><AttractionsIcon /></span>
            <span>Fun Additions</span>
        </div>
        <div>
            <span><CheckroomIcon /></span>
            <span>Wonderful Shirts</span>
        </div>
        <div>
            <span><HistoryEduIcon /></span>
            <span>Certificates</span>
        </div>
        <div>
            <span>____________________</span>
        </div>
        <div>
            <span>What's popular?</span>
        </div>
        <div>
            <a href='https://harvard.edu' target='_blank'><img src='/images/harvard-crest.png' alt='harvard-logo' /></a>
        </div>
        <div>
            <a href='https://cs50.harvard.edu/x' target='_blank'><p>CS50</p></a>
        </div>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
    color: white;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 8px;
    gap: 2rem;

    div {
        display: flex;
        align-items: center;
        font-size: 20px;
        
    }
    span {
        padding: 2px;
        cursor: pointer;
    }
    img {
        height: 90px;
        cursor: pointer;
    }
    p {
        font-size: 20px;
        cursor: pointer;
    }
    a {
        color: white;
    }
`