import "./Form.css";

function Form({
  handleSubmit
}) {
  return (
    <form
      className="Form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        id="input1"
        name="input1"
        placeholder="top text"
        autoFocus
      />
      <input
        type="text"
        id="input2"
        name="input2"
        placeholder="bottom text"
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
