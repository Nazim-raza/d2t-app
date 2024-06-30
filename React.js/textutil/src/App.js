import { useState } from 'react';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import Alert from './components/Alert';
import {
  HashRouter,
  Routes,
  Route,
} from "react-router-dom"; 

function App() {
  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
       msg:message,
       type:type
    });
     setTimeout(()=>{
       setAlert(null);
     },1500);
  }

  const toggleMode=()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor ="rgb(34 24 51)";
      showAlert("Dark Mode has enabled","success");
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      showAlert("Light Mode has enabled","success"); 
    }
  } 
  return (
    
     
      <>
      <HashRouter>
      
       <div className="container-fluid">
       <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} about="About" />
       </div>
       <Alert Alert={alert}/>
       <div className='container'>
       <Routes>
          <Route path="/about" element={<About mode={mode}/>}>
            
          </Route>
     
          <Route path="/" element={<Textarea heading="Enter your text" mode={mode} />}>
          
          </Route>
        </Routes>
       
       </div>
       </HashRouter>
      
        
      
     </>
  );
}

export default App;
