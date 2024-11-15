import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("enter text here:");
    const textchangetoupppercase = () => {    
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const textchangetolowercase = () => {    
        let newtext = text.toLowerCase();
        settext(newtext);
    }

     const handleonchange = (event) => {    
    settext(event.target.value);
 }

  return (
    <>
    <div className='container'>    
        <h1>{props.heading}</h1> 
<div className="mb-3"> 
  <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea> 
</div>
<button type="button" class="btn btn-danger mx-1" onClick={textchangetoupppercase}>Convert to uppercase</button>
<button type="button" class="btn btn-danger mx-1" onClick={textchangetolowercase}>Convert to Lowercase</button>
    </div>
    <div className='container my-3'>
        <h1>Your text summary:</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h2>Preview:</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
