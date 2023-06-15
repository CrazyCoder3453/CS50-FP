import React from "react";
import { styled } from "styled-components";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SchoolIcon from "@mui/icons-material/School";

function Ad() {
  return (
    <Container>
      <div>
        <p>
          <YouTubeIcon />
          Go check out CS50 on youtube
          <a href="https://youtube.com/cs50" target="_blank">
            here.
          </a>
        </p>
        <p>
          <SchoolIcon />
          And on edx
          <a href="https://www.edx.org/cs50" target="_blank">
            here.
          </a>
        </p>
      </div>
      <div>
        <p className="end">This was CS50x!</p>
      </div>
    </Container>
  );
}

export default Ad;

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .end {
        font-size: 24px;
    }
  a {
    color: white;
  }

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  background-color: red;
  color: white;
  width: 80vw;
  height: 10vw;
  margin: 5px 15px;
  border-radius: 12px;
  background-image: url("https://st4.depositphotos.com/1009086/19653/i/450/depositphotos_196533586-stock-photo-clean-simple-blood-red-color.jpg");
`;
