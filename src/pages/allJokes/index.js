import React, { useCallback, useEffect, useState } from "react";

import { JokeBox, Container, Back, Display } from "./style";

import { Link } from "react-router-dom";

import Api from "../../api";

import { Tooltip } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

function AllJokes() {
  const [Joke, setJoke] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const getQueryCategory = useCallback(() => {
    var query = `/?limitTo=[${selectedCategory.toLowerCase()}]`;

    if (selectedCategory.toLowerCase() === "none") {
      query = `/?exclude=[nerdy,explicit]`;
    }

    return query;
  }, [selectedCategory]);

  useEffect(() => {
    var query = `/`;

    if (selectedCategory !== "") {
      query = getQueryCategory();
    }

    async function getJoke() {
      const joke = await Api.get(query);
      setJoke(joke.data.value);
    }
    getJoke();
  }, [selectedCategory, getQueryCategory]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none" }}>
        <Back>
          <ArrowBackRoundedIcon />
          Back
        </Back>
      </Link>
      <div className="formControl">
        <FormControl>
          <InputLabel id="demo-controlled-open-select-label">
            Select Category
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            onChange={handleChange}
          >
            <MenuItem value={"Nerdy"}>Nerdy</MenuItem>
            <MenuItem value={"Explicit"}>Explicit</MenuItem>
            <MenuItem value={"None"}>No Category</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Display>
        {Joke.map((v) => (
          <JokeBox>
            <div className="box">
              <div className="header">
                <h2>Joke</h2>
              </div>
              <p className="joke">{v.joke}</p>
              <div className="tips">
                <Tooltip title="Joke code">
                  <span>ID: {v.id}</span>
                </Tooltip>
                <span>Categorie: {categoriesCases(v.categories)}</span>
              </div>
            </div>
          </JokeBox>
        ))}
      </Display>
    </Container>
  );
}

export default AllJokes;
