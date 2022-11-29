import React, {useState} from 'react';


const TextForm = (props) => {
    


const handleUpClick = () =>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to uppercase!", "success");
}

const handleLowClick = () =>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowercase!", "success");
}

const handleClearClick = () =>{
    let newtext = "";
    setText(newtext);
    props.showAlert("The entered text is cleared!", "success");
}

const handleCopy= () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
}

const handleExtraSpaces= () =>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Removed extra spaces!", "success");
}

const handleOnChange = (event) =>{
    // console.log("on change");
    setText(event.target.value);
   
}

const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1 >{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleLowClick}>
            Convert to Lowercase
        </button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>
            Clear text
        </button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>
            Copy Text
        </button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>
            Remove Extra Spaces
        </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )
}

export default TextForm;
