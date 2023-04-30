import { useEffect, useState } from "react";
import defaultJson from "./data/default.json";
import trollFace from "./media/troll-face.png";
import "./App.css";
import Form from "./components/Form/Form";
import Meme from "./components/Meme/Meme";
import MemesList from "./components/MemesList/MemesList";

function App() {
  /* default value */
  const defaultMeme = defaultJson.data.memes[0];

  /* useState */
  const [memes, setMemes] = useState(defaultJson.data.memes);
  const [meme, setMeme] = useState({
    index: 0,
    image: defaultMeme
  });
  const [texts, setTexts] = useState([
    {
      value: "Shut up",
      width: 500,
      defaultX: 390,
      defaultY: 10
    },
    {
      value: "and take my money",
      width: 500,
      defaultX: 390,
      defaultY: 240
    }
  ]);
  const [hasFetched, setHasFetched] = useState(false);

  /* meme functions */
  const selectRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];
    console.log(randomMeme);
    setMeme(prevMeme => ({
      ...prevMeme,
      index: randomIndex,
      image: randomMeme,
    }));
  };
  const fetchMemes = () => {
    fetch("https://api.imgflip.com/get_memes") // API call
      .then(res => res.json())
      .then(json => {
        setHasFetched(true);
        setMemes(json.data.memes);
      });
  };
  const selectMeme = (index) => {
    const selectedMeme = memes[index];
    try {
      if (selectedMeme) {
        setMeme(prevMeme => ({
          ...prevMeme,
          index,
          image: selectedMeme,
        }));
      } else {
        throw new Error("Meme index is outside of list, or NaN.");
      }
    } catch(e) {
      console.log(e);
    }
  };

  /* text functions */
  const addText = (value = "New text", width = 500, defaultX = 10, defaultY = 10) => {
    setTexts(prevTexts => ([
      ...prevTexts,
      {
        id: texts.length,
        value,
        width,
        defaultX,
        defaultY
      }
    ]));
  };
  const removeText = (index) => {
    setTexts(prevTexts => ([
      ...prevTexts.slice(0, index),
      ...prevTexts.slice(index + 1)
    ]));
  };
  const changeText = (index, value, key = "value") => {
    /* value to be assigned in state */
    let valueState = value;

    /* width key needs numbers to work correctly */
    if (key === "width") {
      valueState = parseInt(value, 10);
    }

    setTexts(prevTexts => (
      prevTexts.map((prevText, prevIndex) => (

        /* at matching index, change value of given key in state
         * else, leave text as is
         */
        prevIndex === index ? { ...prevText, [`${key}`]: valueState } : prevText
      ))
    ));
  };

  /* useEffect */
  useEffect(() => {
    if (hasFetched) {
      selectRandomMeme();
      setHasFetched(false);
    }
  }, [hasFetched]);

  /* render */
  return (
    <div className="App">
      <header className="App-header dark-mode">
        <img
          src={trollFace}
          className="App-logo"
          alt="troll face logo"
        />
        <h1 className="bold">Meme Generator</h1>
      </header>
      <main className="App-main">
        <div id="meme-container">
        {meme && (
          <Meme
            meme={meme}
            texts={texts}
          />
        )}
        </div>
      {memes && (
        <MemesList
          memes={memes}
          meme={meme}
          selectMeme={selectMeme}
        />
      )}
        <Form
          texts={texts}
          addText={addText}
          removeText={removeText}
          changeText={changeText}
          fetchMemes={fetchMemes}
        />
      </main>
    </div>
  );
}

export default App;
