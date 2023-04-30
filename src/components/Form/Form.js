import { Fragment } from "react";
import "./Form.css";

function Form({
  texts,
  addText,
  removeText,
  changeText,
  fetchMemes
}) {
  return (
    <div
      className="Form"
    >
    {texts.length > 0 && texts.map((text, index) => (
      <Fragment key={index}>
        <input
          type="text"
          id={`input-${index}`}
          name="text"
          placeholder={`text ${index}`}
          value={text.value}
          onChange={(e) => changeText(index, e.target.value)}
        />
        <input
          type="number"
          id={`width-${index}`}
          name="width"
          min="40"
          max="1280"
          value={text.width}
          onChange={(e) => changeText(index, e.target.value, "width")}
        />
        <button
          id={`remove-${index}`}
          className="side-button"
          onClick={() => removeText(index)}
        >
          X
        </button>
      </Fragment>
    ))}
      <button
        id="add-text"
        className="side-button"
        onClick={() => addText()}
      >
        +
      </button>
      <button
        id="get-memes"
        className="bold dark-mode dark-mode-button"
        onClick={() => fetchMemes()}
      >
        Get memes
      </button>
    </div>
  );
}

export default Form;
