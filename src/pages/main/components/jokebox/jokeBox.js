import React, { useCallback, useState } from "react";

import JokeBox from "./style";

import CasinoIcon from "@material-ui/icons/Casino";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Tooltip } from "@material-ui/core";

import { Link, useHistory } from "react-router-dom";

function JokeBoxs({ jokeData, getRandomJoke, makeOwnJoke, findJoke }) {
  const [name, setName] = useState("");
  const [lastname, setLast] = useState("");

  const [id, setId] = useState("");
  const [qtn, setQtn] = useState("");

  const history = useHistory();

  const { joke, categories } = jokeData;

  const categoriesCases = useCallback((categories) => {
    if (categories < 1) {
      return "Random";
    } else if (categories !== 1) {
      const value = JSON.stringify(categories);
      if (value === `["nerdy"]`) {
        return "Nerdy";
      } else if (value === `["explicit"]`) {
        return "Explicit";
      }
    }
  }, []);

  return (
    <JokeBox>
      <div className="box">
        <div className="header">
          <h2>Joke</h2>
          <Tooltip title="Random Joke" placement="top">
            <CasinoIcon onClick={() => getRandomJoke()}></CasinoIcon>
          </Tooltip>
        </div>
        <p className="joke">{joke}</p>
        <div className="tips">
          <Tooltip title="Joke code">
            <span>ID: {jokeData.id}</span>
          </Tooltip>
          <span>Categorie: {categoriesCases(categories)}</span>
        </div>
      </div>
      <div className="extras">
        <div className="changeName">
          <p>Make a joke with you own name!</p>
          <TextField
            id="standardName"
            size="small"
            value={name}
            label="Name"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                makeOwnJoke(name, lastname);
                setName("");
                setLast("");
              }
            }}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <TextField
            id="standardLast"
            size="small"
            value={lastname}
            label="LastName"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                makeOwnJoke(name, lastname);
                setName("");
                setLast("");
              }
            }}
            onChange={(e) => {
              setLast(e.target.value);
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              makeOwnJoke(name, lastname);
              setName("");
              setLast("");
            }}
          >
            Do it
          </Button>
        </div>
        <div className="findJoke">
          <p>Find the joke by code</p>
          <TextField
            type="number"
            id="standardLast"
            size="small"
            value={id}
            label="Joke Id"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setName("");
                setLast("");
                findJoke(id);
                setId("")
              }
            }}
            onChange={(e) => {
              if (e.target.value < 0) {
                setId("");
              } else {
                setId(e.target.value);
              }
            }}
          />
          <Button
            variant="contained"
            onClick={() => {
              setName("");
              setLast("");
              findJoke(id);
              setId("")
            }}
          >
            Find
          </Button>
        </div>
        <div className="chosen">
          <p>Need more random jokes? Tell me how many?</p>
          <TextField
            type="number"
            id="standardLast"
            value={qtn}
            size="small"
            label="How many"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                history.push(`/chosen/${Number(qtn) + 1 - 1}`);
              }
            }}
            onChange={(e) => {
              if (e.target.value < 0) {
                setQtn("");
              } else {
                setQtn(e.target.value);
              }
            }}
          />
          <Button variant="contained" href={`/chosen/${Number(qtn) + 1 - 1}`}>
            Show me
          </Button>
        </div>
      </div>
      <Tooltip title="See all the Jokes">
        <Link className="linkAll" to="/alljokes">
          All Jokes<ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
        </Link>
      </Tooltip>
    </JokeBox>
  );
}

export default JokeBoxs;
