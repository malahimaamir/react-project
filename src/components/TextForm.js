import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, settext] = useState("enter text here:");
    const textchange = () => {    
        let newtext = text.toUpperCase();
        settext(newtext);
    }
     const handleonchange = (event) => {    
    settext(event.target.value);
 }

  return (
    <div>    
        <h1>{props.heading}</h1> 
<div className="mb-3"> 
  <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea> 
</div>
<button type="button" class="btn btn-primary" onClick={textchange}>Convert to uppercase</button>
    </div>
  )
}
