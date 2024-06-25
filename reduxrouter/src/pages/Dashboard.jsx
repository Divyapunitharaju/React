import {useDispatch} from "react-redux";
import { userUpdate } from "../utlis/ReduxState";
 const Dashboard=(props)=>{
    const dispatch=useDispatch();

    const nameChange=()=>{
        dispatch(userUpdate({type:"name_change",name:"Hema"}))
        // dispatch(userUpdate({type:"email_change",email:"hema@gmail.com"}))
    }
    const emailChange=()=>{
        // dispatch(userUpdate({type:"name_change",name:"Hema"}))
        dispatch(userUpdate({type:"email_change",email:"hema@gmail.com"}))
    }
    return(
        <div>
            Dashboard
            <button onClick={()=>{nameChange()}}>Name Change</button>
            <button onClick={()=>{emailChange()}}>Email Change</button>
        </div>
    )
}
export default Dashboard