import React from "react";
import cn from "classnames";

import styles from "./TextInput.module.css";
console.log(styles);

const TextInput = ({ placeholder, value, handleChange, invalid }) => (
  <div className={cn("input-group", styles.main)}>
    <textarea
      className={cn("form-control", { [styles.invalid]: invalid })}
      placeholder={placeholder || "Start typing..."}
      value={value || ""}
      onChange={handleChange}
    />
  </div>
);

export default TextInput;
