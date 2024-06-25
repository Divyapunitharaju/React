
//to update twice in a function 
import './App.css';
import {useReducer,useState} from 'react'

function meaningfulCallback(oldState,dispatchActionTrigger){
  if(dispatchActionTrigger.action==='change_age'){
    return{name:oldState.name,age:dispatchActionTrigger.new_age}
  }

}

function App() {
  let [state,dispatchAction]=useReducer(meaningfulCallback,{name:"divya",age:22})
  // let[name1,setName]=useState("Divya")
  let[person,setPerson]=useState({name:"divya",age:"21"})

  return (
    <div className="App">
       <p>name:{state.name}</p>
       <p>Age:{state.age}</p> 
       <button onClick={(e)=> {dispatchAction({"action":"change_age",new_age:"23"});setPerson({name:"divya",age:"24"})  }}>Change age</button>
       {/* <p>name:{name1}</p> */}
       <p>person:{person.name}</p>
       <p>age:{person.age}</p>
    </div>
  );
}

export default App;
