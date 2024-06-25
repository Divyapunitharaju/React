import { useContext,createContext } from "react"
import { Logintoken } from "../Utils/Logintoken";
export const Logintoken=createContext("");

const Login=()=>{
    const [token,setToken]=useState("bearer");
    return(
        <Logintoken.Provider value={token}>
          <div>
           <button onClick={()=>{setToken("hi hello bye")}}>Login</button>
        </div>
        </Logintoken.Provider>
        
    )
}
export default Login