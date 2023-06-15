import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Ad from "./Ad";
import Card from "./Card";
import { styled } from "styled-components";

function Fun() {
  return (
    <Container>
      <Header />
      <Bottom>
        <Sidebar />
        <div>
          <Ad />

          <h2>Fun Additions! 🎉</h2>
          <Cards>
            <Card 
                src='/images/cs50-duck.webp'
                name='CS50 Rubber Duck'
                price='$3.99'
            />
            <Card 
                src='/images/cs50-pen.webp'
                name='CS50 Pen'
                price='$4.99'
            />
            <Card 
                src='/images/cs50-glasses.jpg'
                name='CS50 Sunglasses'
                price='$9.99'
            />
        </Cards>
        </div>
      </Bottom>
    </Container>
  );
}

export default Fun;

const Container = styled.div``;
const Bottom = styled.div`
  display: flex;

  h2 {
    padding: 12px;
  }
`;

const Cards = styled.div`
    display: flex;
    justify-content: space-around;
`