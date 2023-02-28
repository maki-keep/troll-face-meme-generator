import "./Meme.css";

function Meme({
  meme
}) {
  return (
    <div className="Meme">
      {meme.image && <img
        src={meme.image.url}
        alt={meme.image.name}
        width={meme.image.width}
        height={meme.image.height}
        className="Meme-image"
      />}
      {meme.textTop && <p className="Meme-text Meme-text-top">{meme.textTop}</p>}
      {meme.textBottom && <p className="Meme-text Meme-text-top">{meme.textBottom}</p>}
    </div>
  );
}

export default Meme;
