import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
 const [mode,setMode]=useState(false)
 const toggleMode=()=>{
  if(mode==='dark')
  {
    setMode('light')
    document.body.style.backgroundColor='white'
  }
  else{
    setMode('dark')
    document.body.style.backgroundColor='#042743'
  }
 }
  return (
<div>
<Navbar title="TextUtils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
<div className='container my-3'>
{/* <About/> */}
<TextForm heading="Enter the text to analyze" mode={mode}/>
</div>

</div>
  );
}

export default App;
