import "./Form.css";

function Form({
  handleSubmit,
  handleInputChange,
  meme
}) {
  return (
    <form
      className="Form"
      onSubmit={handleSubmit}
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
      <input
        type="submit"
        value="Get random meme image &#128444;"
        className="bold dark-mode dark-mode-button"
      />
    </form>
  );
}

export default Form;
