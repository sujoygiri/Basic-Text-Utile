// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setmode] = useState('light');
  const handelDarkmode = () =>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  let style = {
    height:'300px',
    heading:'Enter your text for analyze'
  }
  return (
    <>
    <Navbar title='TextUtils' mode={mode} toggleMode={handelDarkmode}/>
    
    <TextForm style={style} mode={mode}/>
    </>
  );
}

export default App;
