import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, settext] = useState('');
    const textchangetoupppercase = () => {    
        let newtext = text.toUpperCase();
        settext(newtext);
    }
    const textchangetolowercase = () => {    
        let newtext = text.toLowerCase();
        settext(newtext);
    }
    const textclear = () => {    
        let newtext = ('');
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
<button type="button" class="btn btn-danger mx-1" onClick={textclear}>CLear text</button>
    </div>
    <div className='container my-3'>
        <h2>Your text summary:</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes read</p>
        <h3>Preview:</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
