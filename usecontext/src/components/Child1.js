import Child2 from "./Child2"
import React,{createContext,useState} from 'react'
import { Context } from "./Context";



function Child1(){
   let[name,setName]=useState("Divya");


    return <Context.Provider value ={name}>
            <div style={{"background-color":"yellow"}}>
            <p>Hello Child1{name}<button onClick={()=>{setName("Kaviya")}}>Change Name</button></p> 
                Child2:<Child2 />
            </div>
    </Context.Provider>
   
        
    
}
export default Child1