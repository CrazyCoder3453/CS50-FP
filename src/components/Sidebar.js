import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AttractionsIcon from "@mui/icons-material/Attractions";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

function Sidebar() {
  return (
    <Container>
      <LinkStyled to="/fun">
        <div>
          <span>
            <AttractionsIcon />
          </span>
          <span>Fun Additions</span>
        </div>
      </LinkStyled>
      <LinkStyled to="/merch">
        <div>
          <span>CS50 Merch</span>
        </div>
      </LinkStyled>
      <LinkStyled to="/certificates">
        <div>
          <span>
            <HistoryEduIcon />
          </span>
          <span>Certificates</span>
        </div>
      </LinkStyled>
      <div>
        <span>____________________</span>
      </div>
      <div>
        <a href="https://harvard.edu" target="_blank">
          <img src="/images/harvard-crest.png" alt="harvard-logo" />
        </a>
      </div>
      <div>
        <a href="https://cs50.harvard.edu/x" target="_blank">
          <p>CS50</p>
        </a>
      </div>
    </Container>
  );
}

export default Sidebar;

const Container = styled.div`
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  gap: 2rem;
  flex: 0.2;
  background-color: #661816;
  height: 100vh;

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
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
`;
