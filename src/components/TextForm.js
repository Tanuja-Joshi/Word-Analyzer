import React, {useState}from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,setText]=useState('')
    const handleOnChange=(event)=>
{
    setText(event.target.value)
}
    const handleUpClick=()=>{
    const newText= text.toUpperCase();
    setText(newText)
    props.showAlert(' Converted to upper case','success') //you can do the same for other handlers
}

const handleLowClick=()=>{
    const newText= text.toLowerCase();
    setText(newText)
    props.showAlert(' Converted to lower case','success')
}
const handleClear=()=>{
    const newText=" "
    setText(newText)
    props.showAlert(' Text cleared','success')
}
const handleSentenceCase=()=>{
    let newText=text.toLowerCase();
newText=newText.charAt(0).toUpperCase().concat(text.slice(1,text.length))
    setText(newText)
    props.showAlert(' Converted to Sentence case','success')
}
const handleCapitalizedCase=()=>{
        let newText=text.toLowerCase();
        newText=newText.replace(/\b\w/g, (char) => char.toUpperCase())
        setText(newText)
        props.showAlert(' Converted to Capitalized case','success')
    }
    const handleInverseCase=()=>{
        let newText=text.toLowerCase();
         newText=newText.replace(/\w\b/g, (char) => char.toUpperCase())
            setText(newText)
            props.showAlert(' Converted to Inverse case','success')
        }
    const handleCopy=()=>{
      var newText=document.getElementById("myBox")  
      newText.select()
      navigator.clipboard.writeText(newText.value)  
      props.showAlert(' Copied to clipboard','success')
    }
    const handleExtraSpace=()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert(' Removed extra spaces','success')
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
        <h2>Preview </h2>
        {text.length>0?text:'enter anything in the textbox above to preview'}
       
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