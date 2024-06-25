
import './App.css';
import React,{useRef,useState} from "react";


function App() {
  let [count, setCount] =useState(1)
  let intervalRef= useRef(0);

  const start = () => {
    clearInterval(intervalRef.current)
   intervalRef.current= setInterval(() => {
      setCount(count+1)
    },1000);

  }
  const stop = () => {
    clearInterval(intervalRef.current)
    
  }

  return (
    <div className="App">
      {count}
      <button onClick={() => {start()}} >Start</button>
      <button onClick={() => {stop()}} >Stop</button>
    
    </div>
  );
}

export default App;
