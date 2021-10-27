import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const changeUpper = () => {
    let new_text = text.toUpperCase();
    setText(new_text);
  };
  const clickHandel = (e) => {
    setText(e.target.value);
  };

  const handelCopy = () => {
    let text = document.getElementById("textInput");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  return (
    <>
      <div className="container mt-4">
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.style.heading}
        </h1>
        <div className="form-floating mt-4">
          <textarea
            className="form-control"
            placeholder="Enter Your Text"
            id="textInput"
            style={{
              height: props.style.height,
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "light" ? "white" : "#042743",
            }}
            value={text}
            onChange={clickHandel}
          ></textarea>
          <label
            htmlFor="textInput"
            style={{ color: props.mode === "light" ? "black" : "white" }}
          >
            Enter Your Text
          </label>
        </div>
        <button className="btn btn-primary mt-3 mx-1" onClick={changeUpper}>
          Convert Text To Uppercase
        </button>
        <button className="btn btn-primary mt-3 mx-1" onClick={handelCopy}>
          Copy Text
        </button>
      </div>
      <div
        className="container mt-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h4>Some Detail About Your Text: </h4>
        <h5>
          Your Text Have {text.split(" ").length} Words And {text.length}{" "}
          Charecters
        </h5>
      </div>
      <div
        className="container mt-3 my-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Preview</h2>
        {text.length > 0 ? text : "Enter your text above to preview here"}
      </div>
    </>
  );
}
