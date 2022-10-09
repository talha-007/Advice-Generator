import {useState, useEffect} from 'react'
import dice from './images/icon-dice.svg'
import divider from './images/pattern-divider-desktop.svg'
import dividerm from './images/pattern-divider-mobile.svg'
import './App.css';

function App() {
  const [text, setText] = useState([])
  const fetchData = async()=>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setText(data)
    console.log(data)
  }

  useEffect(()=>{
    fetchData()
  },[])

  return (
    
        <div className='card'>
          <div className='content'>
            <p>Advice #{text.slip.id}</p>
            <h1>{text.slip.advice}</h1>
          </div>
          <div className='divi'>
            <img className='desk' src={divider} alt="divider"/>
            <img className='mob' src={dividerm} alt="dividerm"/>
          </div>
          <button onClick={fetchData}><img src={dice} alt=""/></button>
        </div>

  );
}

export default App;
