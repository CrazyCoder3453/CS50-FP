import React from "react";
import { styled } from "styled-components";
import { Link } from 'react-router-dom';


function Header() {
  return (
        <Container>
          <Logo>
            <p>shop</p>
            <p>50</p>
          </Logo>
          <Options>
            <p>Fun Additions</p>
            <p>Wonderful Shirts</p>
            <p>Certificates</p>
          </Options>
          <EndMessage>
            <p>This was CS50!</p>
          </EndMessage>
        </Container>
  );
}

export default Header;

const Container = styled.div`
  height: 70px;
  display: flex;
  background-color: crimson;
  align-items: center;
  color: white;
  justify-content: space-evenly;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  img {
    padding-top: 20px;
    padding-left: 20px;
    width: 120px;
    padding-bottom: 5px;
  }
  p {
    font-size: 28px;
    font-weight: bold;
    color: white;
  }
`;

const Options = styled.div`
  display: flex;
  gap: 4rem;

  p {
    cursor: pointer;
    color: white;
    :hover {
      text-decoration: underline;
      text-decoration-color: white;
    }
  }
`;

const EndMessage = styled.div`
  p {
    padding: 15px;
    cursor: pointer;
  }
`;
