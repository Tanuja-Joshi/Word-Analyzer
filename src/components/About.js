import React from 'react'

export default function About(props) {
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      {/* <div className='container' style={dark}> --- removed style={dark}> from all the buttons and heading to remove dark
      mode which is individually applied to about button */}
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}  data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze your text</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}}  data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        TextUtils is a free character counter tool that that provides instant character and word count statistics for a given text.
        TextUtils report the number of words and characters. Thus it is suitable for writing text with word/character limit.
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser compatible</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"> 
      {/* <div className="accordion-body"style={dark}>  */}
        This word counter software works in any web browser such as chrome, firefox, internet explorer, safari, opera.
        It suits to count characters in facebook, blog, books, excel document, pdf document, essays etc.
      </div>
    </div>
  </div>
</div>    
{/* <button className=" my-3" onClick={handleDarkMode}>{btn}</button> */}
    </div>
    </>
  )
}
