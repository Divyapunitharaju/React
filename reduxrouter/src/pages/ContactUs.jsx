//import {useSelector} from './react-redux'
import {useSelector} from "react-redux"


 const Contactus=(props)=>{

    const name=useSelector((state)=>state.baseVal.name)
    const email=useSelector((state)=>state.baseVal.email)
    return(
        <div>
           Contactus
           <p>Name:{name}</p>  
           <p>email:{email}</p> 
        </div>
    )
}
export default Contactus