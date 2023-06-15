import React, { useState } from "react";
import styled from "styled-components";

function Card({ src, name, price }) {
  const [count, setCount] = useState(0)
  const [currprice, setPrice] = useState(0)

  function addCart() {
    setCount(count + 1)
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    setPrice(currprice + numericPrice)
  }
  function removeCart() {
    setCount(count - 1)
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));
    setPrice(currprice - numericPrice)
  }
  return (
    <Container>
      <img src={src} alt={name} />
      <p>{name}</p>
      <p>{price}</p>
      <button onClick={addCart}>Add to Cart</button>
      <button onClick={removeCart}>Remove from Cart</button>
      <div>
        <p>Count: {count}</p>
        <p>Total: ${currprice}</p>
      </div>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  img {
    width: 50%;
  }
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    cursor: pointer;
    margin-bottom: 2px;
    color: white;
    background-color: crimson;
    border: none;
    padding: 6px;
    border-radius: 14px;
    font-size: 14px;
  }
`;
