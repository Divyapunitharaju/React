import { Link, Outlet } from "react-router-dom";
import "./style/Header.css"

const Header=(props)=>{
    return(
        <div>
         <header>
            <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link to="term">Term</Link></li>
                <li><Link to="about_us">AboutUs</Link></li>
                <li><Link to="contact_us">ContactUs</Link></li>
                <li> <Link to="/login">Login</Link></li>

            </ul>
         </header>
         <main>
         <Outlet />{/*    we can implement anywhere we need */}
         </main>
         <footer>Footer Content</footer>
        </div>
    )
}
export default Header;
