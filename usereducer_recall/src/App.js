
import './App.css';
import { useReducer } from 'react';

import { context } from './Utils/Context';
import Child from './Child';
import Child2 from './Child2';
import Child3 from './Child3';
import Child4 from './Child4';
 
const reducerCallback=(oldState,callbackDispatchAction)=>{
if(callbackDispatchAction.action==="change_age"){
    return{name:oldState.name,age:callbackDispatchAction.new_age}
}
else if(callbackDispatchAction.action==="onchange_name")
{
  return{name:callbackDispatchAction.name,age:oldState.age}
}
else if(callbackDispatchAction.action==="onchange_gender")
{
  return{name:oldState.name,age:oldState.age,gender:callbackDispatchAction.gender}
}
else if(callbackDispatchAction.action==="onchange_email")
{
  return{name:oldState.name,age:oldState.age,gender:oldState.gender,email:callbackDispatchAction.email}
}
else if(callbackDispatchAction.action==="onchange_phone")
{
  return{name:oldState.name,age:oldState.age,gender:oldState.gender,email:oldState.email,phone:callbackDispatchAction.phone}
}

return oldState
}


function App() {

  let [state,callbackDispatch]=useReducer(reducerCallback,{name:"Divya",age:22,gender:"Female",email:"divya@gmail.com",phone:"123456"});
  return (
    
      <context.Provider value={state}>
         <div className="App">
    <p>name:{state.name}</p>
    <p>age:{state.age}</p>
    <p>gender:{state.gender}</p>
    <p>email:{state.email}</p>
    <p>phone:{state.phone}</p>
    <button onClick={()=>{callbackDispatch({action:"change_age",new_age:state.age + 10})}}>Change age</button>
    <button onClick={()=>{callbackDispatch({action:"onchange_name",name:"Praveen"})}}>Change Name</button>
    <button onClick={()=>{callbackDispatch({action:"onchange_gender",gender:"male"})}}>Change Gender</button>
    <button onClick={()=>{callbackDispatch({action:"onchange_email",email:"praveen@gmail"})}}>Change Email</button>
    <button onClick={()=>{callbackDispatch({action:"onchange_phone",phone:"987654"})}}>Change Phone</button>
    
   
     <Child />
     <Child2 />
     <Child3 />
     <Child4 />
    
    </div>
      </context.Provider>
   
    
  );
}

export default App;
