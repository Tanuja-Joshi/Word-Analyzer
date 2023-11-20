import React, {useState}from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,setText]=useState('')
    const handleOnChange=(event)=>
{
    setText(event.target.value)
}
    const handleUpClick=()=>{
    props.showAlert(' Enter something to convert','alert')
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
    //   var newText=document.getElementById("myBox")  
    //   newText.select()
    //   navigator.clipboard.writeText(newText.value) 
    navigator.clipboard.writeText(text) 
      document.getSelection().removeAllRanges() 
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
  style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} 
  id="myBox" rows="8"></textarea>
  </div>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleSentenceCase}>Sentence Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCapitalizedCase}>Capitalized Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleInverseCase}>Inverse Case</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button>
<button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpace}>Remove extra space</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>You can read this paragraph in {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} minutes</p>
        <h2>Preview </h2>
        {text.length>0?text:'Nothing to preview'}
       
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