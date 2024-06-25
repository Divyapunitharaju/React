
import AboutUs from './Aboutus';
import './App.css';
import { Context } from './Utils/Context';
import { useState } from 'react';

function App() {
  let[name,setName]=useState("Divya");
  return (
    <div className="App">
      <Context.Provider value={name}>
      <div>
            <p>Hello {name}<button onClick={()=>{setName("Kaviya")}}>Change Name</button></p> 
                AboutUs:<AboutUs />
      </div>
      </Context.Provider>
     
    </div>
  );
}

export default App;
