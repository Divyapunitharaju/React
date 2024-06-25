import { useContext } from "react"
import { Context } from "./Utils/Context"

const AboutUs=()=>{
   let name=useContext(Context)
    return(
       <div>
            {name}
       </div>
    )
   }
   export default AboutUs