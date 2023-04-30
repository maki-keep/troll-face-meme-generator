import { Fragment } from "react";
import Draggable from 'react-draggable';
import "./Meme.css";

function Meme({
  meme,
  texts
}) {
  const textsElements = texts.map((text, index) => (
    <Fragment
      key={index}
    >
      <Draggable
        bounds="#Meme"
        defaultPosition={{x: text.defaultX, y: text.defaultY}}
        grid={[10, 10]}
      >
        <p
          className="Meme-text"
          style={{
            width: text.width
          }}
        >
          {text.value}
          <span className="highlight"></span>
        </p>
      </Draggable>
    </Fragment>
  ));
  return (
    <div id="Meme">
    {meme.image && (
      <img
        src={meme.image.url}
        alt={meme.image.name}
        width={meme.image.width}
        height={meme.image.height}
      />
    )}
    {texts.length > 0 && textsElements}
    </div>
  );
}

export default Meme;
