
import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState('light');// whether dark mode is enable weatherr or not//
  const [alert, setAlert] = useState('null');

  const showAlert =(message,type)=>{
         setAlert({
          msg:message,
          type:type
         })
         setTimeout(() => {
          setAlert(null);
        }, 5000);
        
  }

  const toggleMode= ()=>{
    if (mode==='light'){
      setMode ('secondary');
      document.body.style.backgroundColor='#FA98ED';
      showAlert("Dark mode has been enabled","Success");
    }
    else{
      setMode ('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Success");
    }
  }
  return (
    <>
    {/*<Navbar title="Textutils1"  aboutText="About Text" />*/}
    {/*<Navbar/>*/}
    <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className='container my-3 '>
    <TextForm heading="Enter the text to analyze below" mode={mode}/>
    </div>
    </>
  );
}

export default App;
