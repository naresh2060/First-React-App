import { useState } from "react";
import React from "react";

export default function TextForm(props) {
  const handleUpText = () => {
    // console.log("HadleText Triggerd");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text Converted to UpperCase", "success");

  };
  const handleLoText = () => {
    // console.log("HadleText Triggerd");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text Conveted to Lowercase", "success");

  };
  const handleClearText = () => {
    // console.log("HadleText Triggerd");
    // let newText = text.toLowerCase();
    setText("");
    props.showAlert("Text Cleared", "success");

  };
  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied to clipboard", "success");

    
  };
  const handleRemoveExtraSpaceText = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces are removed", "success");

  };

  const handleOnChange = (event) => {
    // console.log("handleonChamhe");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (

    <div className="container"
     
        style={{
          backgroundColor:
           props.mode === null ? props.bgColor: props.mode === "light" ? "white" : "rgb(14 35 56)",
          color: props.mode === "light" ? "black" : "white",
        }}
        
   
    >
      <div className="mb-3">
        <h1>{props.title}</h1>
        <textarea
          className="form-control"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "rgb(14 35 56)",
        color: props.mode === "light" ? "black" : "white",
          }}
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="5"
          placeholder="Type Here..."
        ></textarea>
        <button className="btn btn-primary my-3 mx-1" onClick={handleUpText}>
          To UpperCase
        </button>
        <button className="btn btn-primary my-3 mx-1 " onClick={handleLoText}>To LowerCase </button>
        <button className="btn btn-primary my-3 mx-1 " onClick={handleClearText}>Clear</button>
        <button className="btn btn-primary my-3 mx-1 " onClick={handleCopyText}>Copy Text </button>
        <button className="btn btn-primary my-3 mx-1 " onClick={handleRemoveExtraSpaceText}>Remove extra space</button>
      </div>
      <div>
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {text.trim().split(/\s+/).filter(word => word).length} words {text.length} characters{" "}
        </p>
        <p>{0.0042 * text.trim().split(/\s+/).filter(word => word).length} Minutes to read (238 WPM)</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the text area to preview it !!!"}
        </p>
      </div>
    </div>
  );
}
