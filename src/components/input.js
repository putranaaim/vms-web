import React from "react";
import "./loginForm.css";
import { useState } from "react";
import "./input.css";

const INPUT = (props) => {
  const [message, setMessage] = useState(null);

  // 👇️ called every time input's value changes
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  console.log(message);

  return (
    <div>
      <input
        id="message"
        name="message"
        type="text"
        onChange={handleChange}
        value={message}
        placeholder={props.placeholder}
        inputProps={{
          "aria-label": "description",
        }}
      />
    </div>
  );
};

export default INPUT;
