import {useSelector,useDispatch} from "react-redux"

import { personalInfoUpdate } from "./Utils.js/Personredux"

function Child(){
   const name=useSelector((state)=>state.testdate.name)
   const age=useSelector((state)=>state.testdate.age)
   const dispatch=useDispatch();


   return(
    <div>
       <p>name :{name}</p>
       <p>age :{age}</p>
       <button onClick={()=>{dispatch(personalInfoUpdate({type:"change_name",name:"Divya"}))}}>Name change</button>
       <button onClick={()=>{dispatch(personalInfoUpdate({type:"change_age",age:age+10}))}}>age change</button>

    </div>
   )
}
export default Child;