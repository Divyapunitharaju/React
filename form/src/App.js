import logo from './logo.svg';
import './App.css';
import Login from '../../login_page/src/Component/login';
import {useState,useCallback} from 'react'

function App() {
  let [PopupStyle,setPopupStyle]=useState({visibility:visible})

  let loginCallback =useCallback((FormData)=>{
    alert("Login callback")
    alert(JSON.stringify(FormData));
  });

  let SignUpCallback=useCallback(()=>{
    alert("Signup callback")
  })

  let [compo,setCompo]=useState(<Login loginCallback={loginCallback} />)
  return (
    <div className='App'>
      <div className='header'>
          <div className='btnBack'>
          <button onClick={()=>{setPopupStyle({visibility: "visible"});setCompo(<Login loginCallback={log}/>)}}>Login</button>
          <button onClick={()=>{setPopupStyle({visibility: "visible"});setCompo(<SignUp loginCallback={SignUpCallback} />)}}>SignUp</button>
          </div> 
      </div>
       <div className='popupContent'>
          <Login />
       </div >
       <div className='popupContent'>
         <SignUp />
       </div>

    </div>
  );
}

export default App;
