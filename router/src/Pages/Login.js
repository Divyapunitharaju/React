import {useNavigate} from "react-router-dom"

const Login=(props)=>{
    let navigate =useNavigate();
return(
   <div>
   <button onClick={()=>{navigate("/signup")}}>SignUp</button>
   </div>
)
}


export default Login