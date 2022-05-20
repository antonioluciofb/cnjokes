import styled from "styled-components";

const Container = styled.div`
  .formControl {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .MuiFormControl-root {
    width: 150px;
    font-family: "Chakra Petch", sans-serif;
  }

  .MuiSelect-root {
    font-family: "Chakra Petch", sans-serif;
  }
`;

const Display = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Back = styled.div`
  width: 75px;
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
  color: white;

  font-family: "Chakra Petch", sans-serif;
  border-radius: 7px;
`;

const JokeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 30px;
  font-family: "Chakra Petch", sans-serif;

  @media (max-width: 800px) {
    .box {
      max-width: 70%;
    }
  }

  .box {
    width: 400px;
    max-height: 200px;
    min-height: 150px;

    align-items: center;
    display: flex;
    flex-direction: column;

    border-radius: 7px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px;
    margin-left: 10px;

    text-align: center;
  }

  .header {
    display: flex;
    align-items: center;
  }

  h2 {
    height: 30px;
    margin: 0px;
    font-weight: 300;
    letter-spacing: 7px;
  }

  .joke {
    margin: 0px;
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .tips {
    display: flex;

    span {
      margin-left: 15px;
    }
  }
`;

export { JokeBox, Container, Back, Display };
