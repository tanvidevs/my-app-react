import React, {useState} from 'react'



export default function TextForm(props) {
const handleUPClick = ()=>{
  console.log("Upparcase was clicked" + text);
  let newText= text.toUpperCase();
  setText(newText)
}

const handleLOClick = ()=>{
  console.log("Lowercase was clicked" + text);
  let newText= text.toLowerCase();
  setText(newText)
}

const handleOnChange = (event)=>{
  console.log("Upparcase was clicked");
  setText(event.target.value)
}

const handleCopy = () => {
  const text = document.getElementById("my-box");
  text.select();
  navigator.clipboard.writeText(text.value);
};

const handleExtraSpaces =()=>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(""))
}

  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{backgroundColor:props.mode==='light'?'white':'white'}}>
      <h1  style={{backgroundColor:props.mode==='light'?'white':'white'}}>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'white'}} id="my-box" rows="8"></textarea>
</div>
<button className="btn btn.primary" onClick={handleUPClick}>Convert to Upparcase</button>
<button className="btn btn.primary" onClick={handleLOClick}>Convert to Lowercase</button>
<button className="btn btn.primary" onClick={handleCopy }>Copy Text</button>
<button className="btn btn.primary" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className='container  my-2' >
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p> {0.008* text.split(" ").length } Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
