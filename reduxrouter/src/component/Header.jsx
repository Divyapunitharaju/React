import { Link, useNavigate } from "react-router-dom";
import './Header.css'
import { TOKEN } from "../utlis/AppConstrains";

const Header=()=>{
    let navigate=useNavigate();
    const logoutClick=()=>{
        
        localStorage.setItem(TOKEN,"");
        navigate("/")
    }
    return(
        <div className="header">
             <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
                <li><Link to='/about'>About us</Link></li>
                <li><Link to='/contact'>contact us</Link></li>
                <li><span onClick={()=>{logoutClick()}}>Logout</span></li>
                
            </ul>
        </div>
     
    )
}

export default Header;