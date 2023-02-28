import { useState } from "react";
import json from "./data/memes.json";
import trollFace from "./media/troll-face.png";
import "./App.css";
import Form from "./components/Form/Form";
import Meme from "./components/Meme/Meme";

function App() {
  const [meme, setMeme] = useState({});
  const { memes } = json.data;
  const getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    console.log(memes[randomIndex]);
    return memes[randomIndex];
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const textTop = e.target.elements.input1.value;
    const textBottom = e.target.elements.input2.value;
    setMeme({
      image: getRandomMeme(),
      textTop,
      textBottom
    });
  }
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
      <main>
        <Form handleSubmit={handleSubmit} />
        {meme && <Meme meme={meme} />}
      </main>
    </div>
  );
}

export default App;
