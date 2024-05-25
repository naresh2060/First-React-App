
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  // const [bgColor, setbgColor] = useState('white');

  // const hanndleBgColor =(color)=>{
  //       setbgColor(color);
  //     document.body.style.backgroundColor = color;
  //     setMode(null);
  //     showAlert("Bakground Color is changed", "success");


  //       // console.log(color + 'this')
  // }

  const showAlert =(message,type)=>{
    setAlert({
      message : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');  
      // document.body.style.backgroundColor = 'rgb(14 35 56)';
      document.body.style.backgroundColor = 'rgb(14 35 56)';
      showAlert("Dark Mode is Enabled", "success");
      document.title = "Visible-Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode is Enabled", "success");
      document.title = "Visible-Light Mode";

    }
    

  };
  return (
    // <>
    //   <Router>
    //     <Navbar titleText="Weber" homeText="Home" mode={mode} toggleMode={toggleMode} />
    //     <Alert alert={alert} />
    //     {/* <About/> */}

    //     <Routes>
    //       <Route exact path="/about" element={<About/>} >
    //         {/* <About /> */}
    //       </Route>
    //       <Route exact path="/" element={<TextForm title="Form Area" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />} >
    //         {/* <TextForm title="Form Area" mode={mode} toggleMode={toggleMode} showAlert={showAlert} /> */}

    //       </Route>
    //     </Routes>

    //   </Router>
      
    // </>
<>
<Navbar titleText="Weber" homeText="Home" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
     <TextForm title="Form Area" mode={mode} toggleMode={toggleMode} showAlert={showAlert} />
</>
    
  );
}

export default App;
