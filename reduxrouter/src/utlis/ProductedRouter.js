
import { Navigate,useLocation } from "react-router-dom"
import { TOKEN } from "./AppConstrains"
const ProductedRouter=({children})=>{

    let location=useLocation();
    let token=localStorage.getItem(TOKEN)
    if(!token){
        
        return <Navigate to="/login" state={{from:location}}/>
    }
    return children
}
export default ProductedRouter