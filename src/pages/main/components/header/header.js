import React from "react";
import Icon from "../../../../assets/iconChuck.png";
import { Title, Info } from "./style";

function Header() {
  return (
    <>
      <Title>
        <img src={Icon} alt="Chuck Icon" />
        <p>Chuck Norris Jokes</p>
      </Title>
      <Info>
        <p>Who is Chuck Norris?</p>
        <p>
          Chuck Norris facts are satirical factoids about American martial
          artist and actor Chuck Norris that have become an Internet phenomenon
          and as a result have become widespread in popular culture. The 'facts'
          are normally absurd hyperbolic claims about Norris's toughness,
          attitude, sophistication, and masculinity.
        </p>
      </Info>
    </>
  );
}

export default Header;
