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
        <h2 className='mb-4'>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>
            Convert to Uppercase
        </button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>
            Convert to Lowercase
        </button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>
            Clear text
        </button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>
            Copy Text
        </button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>
            Remove Extra Spaces
        </button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter((element)=>{return element.length!=0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!=0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text: "Nothing to preview here"}</p>
    </div>
    </>
  )
}

export default TextForm;
