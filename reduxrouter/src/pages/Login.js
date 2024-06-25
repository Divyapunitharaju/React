import { TOKEN } from "../utlis/AppConstrains"
import { useNavigate } from "react-router-dom"

const Login=()=>{
    let navigate=useNavigate()
    const loginclick=()=>{
        localStorage.setItem(TOKEN,"asdfkjvkjcjkghjfgfhfghffgfgff")
        navigate("/")
    }

    return<div>
       Login
       <button onClick={()=>{loginclick()}}>Login</button>
    </div>
}
export default Login;