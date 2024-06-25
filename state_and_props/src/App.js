// import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import B from './B';

function App() {
  // let[name,setName]=useState("init value")
  // let name1="Init value";

  // return(
  //   <div className='App'>
  //     <button onClick={()=>{setName("Divya");name1="Divyaaaa"}}>Change</button>
  //      <p>{name}</p>
  //      <p>{name1} </p>
  //      <B  name={name1} />
  //   </div>
  // )

  let[token,setToken]=useState("init value")
  let token1="Init value";

  

  return(
    <div className='App'>
      <button onClick={()=>{setToken("1243764867483627");token1="19823973892"}}>Change</button>
       <p>{token}</p>
       <p>{token1} </p>
       <B  token={token1} />
    </div>
  )






}

export default App;
