import React from "react";
import cn from "classnames";

import styles from "./TextInput.module.css";

const TextInput = ({ placeholder, value, handleChange, invalid }) => (
  <div className={cn("form-group", styles.main)}>
    <textarea
      className={cn("form-control", { [styles.invalid]: invalid })}
      placeholder={placeholder || "Start typing..."}
      value={value || ""}
      onChange={handleChange}
    />
    <span id="emailHelp" className="form-text text-muted">
      {invalid ? "Invalid BASIC English" : ""}
    </span>
  </div>
);

export default TextInput;
