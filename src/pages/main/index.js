import React, { useState, useEffect, useCallback } from "react";

import Header from "./components/header/header";
import JokeBox from "./components/jokebox/jokeBox";
import "./style.css";

import Api from "../../api";

import Modal from "@material-ui/core/Modal";

function App() {
  const [Joke, setJoke] = useState("");
  const [limit, setLimit] = useState(0);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const getRandomJoke = useCallback(() => {
    async function getRandomJoke() {
      const joke = await Api.get("/random?escape=javascript");
      setJoke(joke.data.value);
    }
    getRandomJoke();
  }, []);
  const makeOwnJoke = useCallback((name, lastname) => {
    async function ownJoke() {
      const joke = await Api.get(
        `/random?firstName=${name || "Chuck"}&lastName=${lastname || "Norris"}`
      );
      setJoke(joke.data.value);
    }
    ownJoke();
  }, []);

  const findJoke = useCallback(
    (id) => {
      async function findJoke() {
        if (Number(id) > limit || Number(id) < 0) {
          setOpen(true);
          setTitle("Warning");
          setMessage("Sorry we haven't created this joke yet");
          setTimeout(() => {
            getRandomJoke();
          }, 2000);
        } else if (id === "") {
          getRandomJoke();
        } else {
          const joke = await Api.get(`/${id}`);
          if (!joke.data.value.id) {
            setOpen(true);
            setTitle("Warning");
            setMessage(
              "Sorry but apparently this joke no longer exists on our system! Shall we see another one?"
            );
            setTimeout(() => {
              getRandomJoke();
            }, 2000);
          } else {
            setJoke(joke.data.value);
          }
        }
      }
      findJoke();
    },
    // eslint-disable-next-line
    [limit]
  );

  useEffect(() => {
    async function limitJokes() {
      const limitJoke = await Api.get("/");
      setLimit(limitJoke.data.value.length);
    }
    limitJokes();
    getRandomJoke();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <JokeBox
        jokeData={Joke}
        getRandomJoke={() => {
          getRandomJoke();
        }}
        makeOwnJoke={(name, lastname) => {
          makeOwnJoke(name, lastname);
        }}
        findJoke={(id) => {
          findJoke(id);
        }}
      ></JokeBox>
      <Modal className="modal" open={open} onClose={handleClose}>
        <div className="content">
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      </Modal>
    </>
  );
}

export default App;
