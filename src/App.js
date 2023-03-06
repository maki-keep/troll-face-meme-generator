import { useEffect, useState } from "react";
import defaultJson from "./data/default.json";
import trollFace from "./media/troll-face.png";
import "./App.css";
import Form from "./components/Form/Form";
import Meme from "./components/Meme/Meme";

function App() {
  // useState
  const [memes, setMemes] = useState(defaultJson.data.memes);
  const defaultMeme = defaultJson.data.memes[0];
  const [meme, setMeme] = useState({
    image: {
      ...defaultMeme,
      url: require(`./media/${defaultMeme.url}`)
    },
    textTop: "Shut up",
    textBottom: "and take my money"
  });
  const [hasFetched, setHasFetched] = useState(false);

  const getRandomMeme = () => {
    const randomIndex = Math.floor(Math.random() * memes.length);
    console.log(memes[randomIndex]);
    return memes[randomIndex];
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://api.imgflip.com/get_memes") // API call
      .then(res => res.json())
      .then(json => {
        setHasFetched(true);
        setMemes(json.data.memes);
      });
  };

  // useEffect
  useEffect(() => {
    if (hasFetched) {
      const randomMeme = getRandomMeme();
      setMeme(prevMeme => ({
        ...prevMeme,
        image: randomMeme,
      }));
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
      <main>
        <Form
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          meme={meme}
        />
        {meme && <Meme meme={meme} />}
      </main>
    </div>
  );
}

export default App;
