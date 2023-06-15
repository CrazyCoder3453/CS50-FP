import React from 'react'
import Header from './Header'
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Ad from './Ad';
import Card from './Card';

function Shirts() {
  return (
    <Container>
      <Header />
      <Bottom>
        <Sidebar />
        <div>
          <Ad />

          <h2>CS50 Merch! </h2>
          <Cards>
            <Card 
                src='https://cdn.shopify.com/s/files/1/0254/8832/6765/products/mockup-974e6957_720x.jpg?v=1566772723'
                name='CS50 Pillow'
                price='$25.00'
            />
            <Card 
                src='https://cdn.shopify.com/s/files/1/0254/8832/6765/products/mockup-7f8b8310_720x.jpg?v=1566581633'
                name='CS50 Mug'
                price='$12.00'
            />
            <Card 
                src='https://cdn.shopify.com/s/files/1/0254/8832/6765/products/mockup-22701a94_720x.jpg?v=1566581574'
                name='CS50 Phone Case'
                price='$16.00'
            />
        </Cards>
        </div>
      </Bottom>
    </Container>
  );
}

export default Shirts;

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