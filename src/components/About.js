import React,{useState} from 'react'

export default function About() {
    const [dark,setDark]=useState({
        color:'white',
        backgroundColor:'black'
})
const [btn,setBtn]=useState("enable light mode")
    const handleDarkMode=()=>{
        if(dark.color === 'white'){
            setDark
            ({
                color:'black',
                backgroundColor:'white'
        })
        setBtn("Enable dark mode")
        }
        else{
            setDark
            ({
                color:'white',
                backgroundColor:'black'
        })  
        setBtn("Enable light mode")
        }
     
    }
  return (
    <>
    <div className='container' style={dark}>
        <h1>About Us</h1>
        <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={dark} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={dark}>
        <strong>This is the first item's accordion body.</strong> 
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={dark} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={dark}>
        <strong>This is the second item's accordion body.</strong> 
        </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={dark} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={dark}>
        <strong>This is the third item's accordion body.</strong>
      </div>
    </div>
  </div>
</div>    
<button className=" my-3" onClick={handleDarkMode}>{btn}</button>
    </div>
    </>
  )
}
