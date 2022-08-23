import React, { useState } from "react";

export default function Utils(props) {
    const [text,setText] = useState("");
    let wordCount = 0;
    wordCount = parseInt(text.split(" ").length - 1);

    if(text == ""){
        wordCount = 0
    }
    else {
        wordCount = text.split(" ").length;
    }

    // change the state of the text when the user enter a new input
    const changeText = (event) => {
       console.log(event.target.value);
       setText(event.target.value);
    }

    // Convert the text to uppercase
    const convertToUppercase = () => {
        setText(text.toUpperCase())
    }

    // Convert to Lowercase
    const convertToLowerCase = () => {
        setText(text.toLowerCase())
    }

    return (
        <div className="container">
            <h1 className="fw-bolder text-primary mt-3 mt-md-5">
                Enter Text to Analyze
            </h1>
            <div className="form-floating">
                <textarea
                    className="form-control"
                    placeholder="Enter Text to Analyze"
                    id="text"
                    style={{"height":"200px"}}
                    onChange={changeText}
                    value={text}
                ></textarea>
                <label htmlFor="text">Comments</label>
            </div>
            <button onClick={convertToUppercase} className="btn btn-primary mt-2 me-2">Convert to UpperCase</button>
            <button onClick={convertToLowerCase} className="btn btn-primary mt-2">Convert to LowerCase</button>
            <h3 className="text-primary fw-bolder mt-3">Your Text</h3>
            <div className="bg-light p-3">
                <p className="text-success fs-4 fw-bold p-0">{text}</p>
            </div>
            <h3  className="fw-bolder text-primary">Total Words</h3>
            <div className="bg-light p-3">
                <p className="text-success fs-4 fw-bold p-0">{wordCount}</p>
            </div>
            

        </div>
    );
}
