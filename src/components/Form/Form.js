import "./Form.css";

function Form({
  meme,
  handleInputChange,
  fetchMemes
}) {
  const handleClick = () => {
    fetchMemes();
  };
  return (
    <div
      className="Form"
    >
      <input
        type="text"
        id="input1"
        name="textTop"
        placeholder="top text"
        autoFocus
        value={meme.textTop}
        onChange={handleInputChange}
      />
      <input
        type="text"
        id="input2"
        name="textBottom"
        placeholder="bottom text"
        value={meme.textBottom}
        onChange={handleInputChange}
      />
      <button
        id="get-memes"
        className="bold dark-mode dark-mode-button"
        onClick={handleClick}
      >
        Get memes
      </button>
    </div>
  );
}

export default Form;
