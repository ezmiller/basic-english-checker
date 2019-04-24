import React, { useState } from "react";
import ReactDOM from "react-dom";

import TextInput from "./TextInput/TextInput";
import { isValidText } from "./validator/validator";

import "./styles.css";

function App() {
  const [text, setText] = useState("");

  const handleInputUpdate = e => {
    const newVal = e.target.value;
    setText(newVal);
  };

  return (
    <div className="container">
      <h2>Basic English Validator</h2>
      <TextInput
        value={text}
        handleChange={handleInputUpdate}
        invalid={text === "" ? false : !isValidText(text.trim())}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
