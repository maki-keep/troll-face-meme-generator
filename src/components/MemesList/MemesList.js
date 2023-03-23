import "./MemesList.css";

function MemesList({
  memes,
  meme,
  selectMeme
}) {
  const memesElements = memes.map((item, index) => {
    const handleClick = () => {
      selectMeme(index);
    };
    const active = meme.index === index ? " active" : "";
    return (
      <div
        key={`memes-list-${index}`}
        id={`memes-list-${index}`}
        className={`meme-list-item${active}`}
        onClick={handleClick}
      >
        <img
          src={item.url}
          alt={item.name}
          width={item.width}
          height={item.height}
        />
      </div>
    );
  })
  return (
    <div className="MemesList">
    {memesElements}
    </div>
  );
}

export default MemesList;
