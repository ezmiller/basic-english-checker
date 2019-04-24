import React, { useState } from "react";
import ReactDOM from "react-dom";

import TextInput from "./TextInput/TextInput";
import { isValidText } from "./validator/validator";

import "./styles.css";

const debounce = (fn, delay) => {
  let timeout = null;
  return (...args) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => fn.apply(undefined, args), delay);
  };
};

function App() {
  const [text, setText] = useState("");
  const [valid, setTextIsValid] = useState(true);

  const handleInputUpdate = e => {
    const newVal = e.target.value;
    setText(newVal);
  };

  return (
    <div className="container">
      <h3>Can you write in BASIC English?</h3>
      <TextInput
        value={text}
        handleChange={handleInputUpdate}
        invalid={text === "" ? false : !isValidText(text)}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
