import { useEffect, useState } from "react";
import defaultJson from "./data/default.json";
import trollFace from "./media/troll-face.png";
import "./App.css";
import Form from "./components/Form/Form";
import Meme from "./components/Meme/Meme";
import MemesList from "./components/MemesList/MemesList";

function App() {
  // default value
  const defaultMeme = defaultJson.data.memes[0];

  // useState
  const [memes, setMemes] = useState(defaultJson.data.memes);
  const [meme, setMeme] = useState({
    index: 0,
    image: defaultMeme,
    textTop: "Shut up",
    textBottom: "and take my money"
  });
  const [hasFetched, setHasFetched] = useState(false);

  // meme functions
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

  // event handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  };

  // useEffect
  useEffect(() => {
    if (hasFetched) {
      selectRandomMeme();
      setHasFetched(false);
    }
  }, [hasFetched]);

  // render
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
        <Form
          meme={meme}
          handleInputChange={handleInputChange}
          fetchMemes={fetchMemes}
        />
      {meme && (
        <Meme meme={meme} />
      )}
      {memes && (
        <MemesList
          memes={memes}
          meme={meme}
          selectMeme={selectMeme}
        />
      )}
      </main>
    </div>
  );
}

export default App;
