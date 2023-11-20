import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
 const [mode,setMode]=useState(false)
 const [alert,setAlert]=useState(null)
 const toggleMode=()=>{
  if(mode==='dark')
  {
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert(' Light mode has been enabled', 'Success')
    //document.title='TextUtils -Light Mode on'
    // setInterval(()=>{
    //   document.title='TextUtils is amazing'
    // },2000)
    // setInterval(()=>{
    //   document.title='Install TextUtils'
    // },1500)
  }
  else{
    setMode('dark')
    document.body.style.backgroundColor='#042743'
    showAlert(' Dark mode has been enabled','Success')
    //document.title='TextUtils -Dark Mode on'
  }
 }
 const showAlert=(message,type)=>{
  setAlert({msg:message,
  type:type})
  setTimeout(()=>{
    setAlert(null)
  },1500)
 }
  return (
    <>
    <Router>
<div>
<Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
<div className='container my-3'>
  <Alert alert={alert} />
      <Routes>
        <Route exact path="/about" element={<About mode={mode} />} />
        <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
      </Routes>
{/* <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/> */}
</div>

</div>
</Router>
</>
  );
}

export default App;
