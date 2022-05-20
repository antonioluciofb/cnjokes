import styled from "styled-components";

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 10px;
    width: 160px;
    height: 160px;
  }

  p {
    font-size: 50px;
    font-family: "Jockey One", sans-serif;
    color: #373737;
    letter-spacing: 5px;
    align-items: center;
    justify-content: center;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-family: "Chakra Petch", sans-serif;
    margin-top: 10px;
    font-size: 24px;
    text-align: center;
    width: 60%;
    display: flex;
    justify-content: center;
  }
`;
