// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css';
import Auth from './Pages/Auth';
import Dashboard from "./Pages/Dashboard.js";
import React, {useState} from 'react';

function App(){
  let[user, setUser] = useState({user_age: 99, user_name: "Hema", "Status":true, "users":[{"name":"Hari","age":"28","gender":"F"},{"name":"Hema","age":"22","gender":"F"},{"name":"Hari","age":"38","gender":"M"}]});
  // let age=23;
  // let users = {}

  return (
    <div className="App">
      {/* <button type='submit' onSubmit={()=>{setUser({auser_age : 24, user_name: "Hema", "Status":true, "users":[{"name":"Hari","age":"28","gender":"F"},{"name":"Hema","age":"22","gender":"F"},{"name":"Hari","age":"38","gender":"M"}]}) }}>Add text</button>
      <Dashboard /> */}
      <Auth  {...user} />
    </div>
  );
}

export default App;