import styled from "styled-components";

const jokeBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 30px;
  font-family: "Chakra Petch", sans-serif;

  .box {
    max-width: 800px;
    max-height: 200px;
    min-width: 300px;
    min-height: 100px;

    align-items: center;
    display: flex;
    flex-direction: column;

    border-radius: 7px;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    padding: 10px;

    text-align: center;
  }

  .header {
    display: flex;
    align-items: center;
  }

  @media (max-width: 750px) {
    .header::after {
      font-size: 10px;
      content: "Click Me";
    }
  }

  .MuiSvgIcon-root {
    margin-left: 10px;
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

  @media (max-width: 750px) {
    .extras {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .findJoke {
        margin: 10px 0px 0px 0px;
      }

      .chosen {
        margin: 10px 0px 0px 0px;
      }
    }
  }

  .extras {
    max-width: 800px;
    max-height: 1000px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 20px;

    p {
      color: white;

      text-align: center;
      font-family: "Chakra Petch", sans-serif;

      margin-top: 17px;
      margin-bottom: -10px;
    }

    .MuiFormControl-root {
      margin-top: 15px;
    }

    .MuiFormLabel-root {
      font-size: 15px;
      font-family: "Chakra Petch", sans-serif;
      color: white;

      font-weight: bold;
    }

    .MuiInputBase-input {
      font-size: 12px;
      color: white;
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom: 2px solid rgba(255, 255, 255, 0.87);
    }

    .MuiInput-underline:after {
      border-bottom: 2px solid rgba(255, 255, 255, 0.42);
    }

    .MuiInput-underline:before {
      border-bottom: 1px solid rgba(255, 255, 255, 0.42);
    }

    .MuiButton-root {
      height: 20px;
      width: 80%;
      margin: 15px;

      font-weight: bold;
      font-family: "Chakra Petch", sans-serif;
      outline: none;
    }
  }

  .changeName {
    width: 100%;
    height: 200px;
    padding: 2px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
  }
  .findJoke {
    width: 100%;
    height: 200px;
    padding: 2px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-left: 20px;

    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
  }
  .chosen {
    width: 100%;
    height: 200px;
    padding: 2px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    margin-left: 20px;

    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    border-radius: 7px;
  }

  a.chosen {
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
  }

  button.chosen {
    height: 20px;
    width: 50%;
    margin: 15px;

    font-weight: bold;
    font-family: "Chakra Petch", sans-serif;
    outline: none;
  }

  a.linkAll {
    max-width: 150px;
    max-height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 6px;
    margin: 2px;

    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
    text-decoration: none;
    color: white;
    border-radius: 3px;
  }

  .MuiTooltip-popper {
    font-size: 20px;
  }
`;

export default jokeBox;
