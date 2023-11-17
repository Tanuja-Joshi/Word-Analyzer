import React, {useState}from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,setText]=useState('')
    const handleUpClick=()=>{
    const newText= text.toUpperCase();
    setText(newText)
}
const handleOnChange=(event)=>
{
    setText(event.target.value)
}
const handleLowClick=()=>{
    const newText= text.toLowerCase();
    setText(newText)
}
const handleClear=()=>{
    const newText=" "
    setText(newText)
}
const handleSentenceCase=()=>{
const newText=text.charAt(0).toUpperCase().concat(text.slice(1,text.length))
    setText(newText)
}
const handleCapitalizedCase=()=>{
        const newText=text.replace(/\b\w/g, (char) => char.toUpperCase())
        setText(newText)
    }
    const handleInverseCase=()=>{
        const newText=text.replace(/\w\b/g, (char) => char.toUpperCase())
            setText(newText)
        }
    const handleCopy=()=>{
      var newText=document.getElementById("myBox")  
      newText.select()
      navigator.clipboard.writeText(newText.value)  
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
    }
  return (
    <>
    <div>
<div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className='mb-3'>
  <label htmlFor="myBox" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} 
  style={{backgroundColor:props.mode==='dark'?'gray':'white', color:props.mode==='dark'?'white':'#042743'}} 
  id="myBox" rows="8"></textarea>
  </div>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleSentenceCase}>Sentence Case</button>
<button className="btn btn-primary mx-2" onClick={handleCapitalizedCase}>Capitalized Case</button>
<button className="btn btn-primary mx-2" onClick={handleInverseCase}>Inverse Case</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove extra space</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>You can read this paragraph in {0.008*text.split(" ").length} minutes</p>
        <h2>Preview</h2>
        {text.length>0?text:'enter some text obove to preview'}
    </div>
    </>
  )
}
TextForm.propTypes={
    heading: PropTypes.string
}
TextForm.defaultProps={
    heading:"enter any text to analyze"
}