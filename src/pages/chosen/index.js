import React, { useCallback, useEffect, useState } from "react";

import { JokeBox, Container, Display, Back } from "./style";

import { Tooltip } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Modal from "@material-ui/core/Modal";

import "./modal.css";

import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";

import { Link, useParams } from "react-router-dom";

import Api from "../../api";

function Chosen() {
  const [Joke, setJoke] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const { qtn } = useParams();
  const [params, setParams] = useState();

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

  const getValidator = useCallback(() => {
    var value = null;

    if (qtn < 0) {
      setOpen(true);
      setTitle("Warning");
      setMessage(
        `Why are you so negative? Chuck Norris didn't like that at all! But he will fix it for you! Be careful next time`
      );
      value = Math.abs(qtn);
      // eslint-disable-next-line
    } else if (qtn == 0 || isNaN(Number(qtn))) {
      setOpen(true);
      setTitle("Warning");
      setMessage("Why do you like to cause problems so much?");
      value = 2;
    }

    return value;
  }, [qtn]);

  const getQueryCategory = useCallback(() => {
    var query = `?limitTo=[${selectedCategory.toLowerCase()}]`;

    if (selectedCategory.toLowerCase() === "none") {
      query = `?exclude=[nerdy,explicit]`;
    }

    return query;
  }, [selectedCategory]);

  useEffect(() => {
    var validator = null;

    if (params > 0) {
      validator = params;
    } else {
      const newValue = getValidator();
      validator = newValue;
      setParams(newValue);
    }

    var query = `/random/${validator || qtn}`;

    if (selectedCategory !== "") {
      query = query + getQueryCategory();
    }

    async function getJoke() {
      const joke = await Api.get(query);
      setJoke(joke.data.value);
    }
    getJoke();
  }, [qtn, params, selectedCategory, getQueryCategory, getValidator]);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

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
        {Joke.map((v, i) => (
          <JokeBox key={i}>
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
      <Modal className="modal" open={open} onClose={handleClose}>
        <div className="content">
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </Modal>
    </Container>
  );
}

export default Chosen;
