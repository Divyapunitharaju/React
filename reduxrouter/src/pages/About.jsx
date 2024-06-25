import {useDispatch, useSelector } from "react-redux";
import { userUpdate } from "../utlis/ReduxState";
const About=(props)=>{
    const name=useSelector((state)=>state.baseVal.name)
    const email=useSelector((state)=>state.baseVal.email)
    const dispatch =useDispatch();
    const nameChange=()=>{
        dispatch(userUpdate({type:"name_change",name:"Divya"}))
       
    }
    const emailChange=()=>{
        
        dispatch(userUpdate({type:"email_change",email:"hema@gmail.com"}))
    }
    
    return(
        <div>
            Aboutus
            <p>Nmae:{name}</p>
            <p>email:{email}</p>
            <button onClick={()=>{nameChange()}}>Name Change</button>
            <button onClick={()=>{emailChange()}}>Email Change</button>
        </div>
    )
}

export default About;