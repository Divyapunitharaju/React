import './App.css';
import React, {useState, useCallback} from "react"
import Login from './components/app/Login';
import Signup from './components/Signup';

function App() {
  let [popupStyle, setPopupStyle] = useState({visibility: "visible"})

  let loginCallback = useCallback((formData) => {
   alert("Login callback")
   alert(JSON.stringify(formData));

  });

  let signupCallback = useCallback(() => {
   alert("Signup callback")
  });

  let [compo, setCompo] = useState(<Login loginCallback={loginCallback}/>)
  return (
    <div className="App">
       <div className="header">
          <div className="btnBack">
          <button onClick={()=> {setPopupStyle({visibility: "visible"}); setCompo(<Login loginCallback={loginCallback}/>)}}>Login</button>
          <button onClick={()=> {setPopupStyle({visibility: "visible"}); setCompo(<Signup callback={signupCallback}/>)}}>Signup</button>
          </div>
       </div>

       <div className="popupBack" style={popupStyle}>
          <div className="blurBack" onClick={()=> {setPopupStyle({visibility: "hidden"})}}></div>
          {compo}
          
       </div>
    </div>
  );
}

export default App;
